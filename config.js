require("dotenv").config();

const { env } = process;

module.exports = {
  PORT: env.PORT,
  PSQL: env.PSQL,
  EMAIL: env.EMAIL,
  PASSWORD: env.PASSWORD,
};
