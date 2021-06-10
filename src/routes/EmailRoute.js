const SignUpPostController = require("../controllers/SignUpPostController");
const VerifyGetController = require("../controllers/VerifyGetController");

const router = require("express").Router();

router.get("/confirm/:id", VerifyGetController);

module.exports = {
  path: "/",
  router,
};
