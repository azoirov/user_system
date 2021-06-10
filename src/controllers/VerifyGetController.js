module.exports = async (req, res) => {
  const id = req.params.id;

  let user = await req.psql.users.findOne({
    where: {
      user_id: id,
    },
  });

  if (user) {
    await req.psql.users.update(
      { isConfirmed: true },
      {
        where: {
          user_id: id,
        },
      }
    );
  }

  res.status(200).json({
    ok: true,
    message: "Confirmed",
  });
};
