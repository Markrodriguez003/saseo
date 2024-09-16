import { Router } from "express";
const router = Router();

// Brings in all different route logic into this router file.
// Think of the below routes as the main route wrapper container and the files within
// this controller as the individual logic for each respective route
import * as controller from "../controllers/appController.js";

// Script that handles sending mail to users once they register to site.
import { registerMail } from "../controllers/mailer.js";

// Authentication middleware. Verifies user's session token
import Auth, { localVariables } from "../middleware/auth.js";

// Registers User
router.route("/register").post(controller.register);

// Sends user email after registering
router.route("/registerMail").post(registerMail);

// Authenticates users account
router.route("/authenticate").post(controller.verifyUser, (req, res) => {
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
router.route("/verifyOTP").get(controller.verifyUser, controller.verifyOTP);

// Resets all variables
router.route("/user/createResetSession").get(controller.createResetSession);

// PUT
// Route that helps update user's profile
router.route("/updateUser").put(Auth, controller.updateUser);

// Route that resets user's password
router
  .route("/resetPassword")
  .put(controller.verifyUser, controller.resetPassword);

export default router;
