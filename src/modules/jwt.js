const { sign, verify } = require("jsonwebtoken");

module.exports.generateJWTToken = async (data) => {
	return sign(data, "SECRET_WORD")
}

module.exports.verifyJWTToken = async (key) => {
	try {
		return verify(key, "SECRET_WORD")
	} catch(e) {
		return false
	}
}