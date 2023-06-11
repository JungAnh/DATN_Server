const authController = require("../controllers/auth.controller.js");
const router = require("express").Router();

router.post("/signup", authController.signup);
router.post("/signin", authController.signin);
router.post("/logout", authController.logout);
router.post("/refreshToken", authController.refreshToken);

module.exports = router;
