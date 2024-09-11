import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from "../controllers/appController.js";

// Authentication middleware

import Auth, { localVariables } from "../middleware/auth.js";

// POST
// Registers User
router.route("/register").post(controller.register);

// Sends user email after registering
router.route("/registerMail").post((req, res) => {
  return res.json("user account register mail route");
});

// Authenticates users account
router.route("/authenticate").post((req, res) => {
  return res.json("user account authenticate route");
});

// User log in router
router.route("/login").post(controller.verifyUser, controller.login);

// GET

// Grabs user's username
router.route("/user/:username").get(controller.getUser);

// Generates random OTP for password reset
router
  .route("/generateOTP")
  .get(controller.verifyUser, localVariables, controller.generateOTP);

// verify generated OTP
router.route("/verifyOTP").get(controller.verifyOTP);

// Resets all variables
router.route("/user/createResetSession").get(controller.createResetSession);

// PUT
// Route that helps update user's profile
router.route("/updateUser").put(Auth, controller.updateUser);

// Route that resets user's password
router.route("/resetPassword").put(controller.resetPassword);

export default router;
