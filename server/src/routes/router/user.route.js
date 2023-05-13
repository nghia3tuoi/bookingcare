const userController = require("../../app/controllers/userController");

const router = require("express").Router();

router.get("/user/get-allcodes", userController.getAllCode);
router.delete("/user/delete-user", userController.removeUser);
router.post("/user/update-user", userController.updateUser);
router.get("/user/get-users", userController.getUser);

module.exports = router;
