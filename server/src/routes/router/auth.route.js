const authControllers = require("../../app/controllers/authControllers");

const router = require("express").Router();

router.post("/auth/register", authControllers.Register);
router.post("/auth/login", authControllers.Login);

module.exports = router;
