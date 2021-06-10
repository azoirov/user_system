const { generateCrypt } = require("../modules/bcrypt");
const sendMail = require("../modules/email");

module.exports = async (req, res) => {
  try {
    const { full_name, email, phone_number, gender, bdate, password } =
      req.body;

    if (!(full_name || email || phone_number || gender || bdate)) {
      throw new Error("All fields are required");
    }

    let user = await req.psql.users.findOne({
      where: {
        email,
      },
    });

    if (user) throw new Error("User has already been registered");

    user = await req.psql.users.create({
      full_name,
      email,
      phone_number: phone_number.toString(),
      gender: gender == 1 ? "female" : "male",
      bdate: bdate,
      password: await generateCrypt(password),
    });

    await sendMail(email, user.dataValues.user_id);
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
