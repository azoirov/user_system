const { sendEmail } = require("../modules/email");
const { generateJWTToken } = require("../modules/jwt");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email || password)) {
      throw new Error("All fields are required");
    }

    let user = await req.psql.users.findOne({
      where: {
        email,
      },
    });

    if (!user) throw new Error("User not registered");

    if (!user.dataValues.isConfirmed) {
      throw new Error("EMAIL IS NOT CONFIRMED");
    }

    let token = await generateJWTToken({ user_id: user.dataValues.user_id });

    res.status(200).json({
      ok: true,
      message: "Successfully logged in",
      data: {
        token: token,
      },
    });

    res.status(201).json({
      ok: true,
      message: `Successfully registered, verification link was sent to email: ${email}`,
      data: {
        user: { ...user.dataValues },
      },
    });
  } catch (e) {
    res.status(400).json({
      ok: false,
      message: e + "",
    });
  }
};
