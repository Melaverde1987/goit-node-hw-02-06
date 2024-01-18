import express from "express";

import authController from "../../controllers/auth-controller.js";

import { isEmptyBody, authenticate, upload } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatarURL"),
  isEmptyBody,
  authController.signup
);

authRouter.post("/login", isEmptyBody, authController.signin);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.signout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  authController.updateAvatar
);

export default authRouter;
