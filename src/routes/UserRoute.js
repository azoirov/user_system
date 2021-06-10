const LoginPostController = require("../controllers/LoginPostController");
const SignUpPostController = require("../controllers/SignUpPostController");

const router = require("express").Router();

router.post("/signup", SignUpPostController);
router.post("/login", LoginPostController);

module.exports = {
  path: "/api/users",
  router,
};
