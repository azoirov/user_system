const Sequelize = require("sequelize");

const UserModel = require("./model/UserModel")

const { PSQL } = require("../config")

const sequelize = new Sequelize(PSQL, {
	logging: e => console.log("SQL: ", e)
});

module.exports = async () => {
	let db = {};

	db.users = await UserModel(Sequelize, sequelize)

	sequelize.sync({ force: true })

	return db
}