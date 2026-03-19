import express from "express";
import { authController } from "../controllers/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import {
  loginSchema,
  refreshTokenSchema,
  registerSchema,
} from "../validators/auth.validate";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/auth/login", validate(loginSchema), authController.login);
router.post(
  "/auth/register",
  validate(registerSchema),
  authController.register,
);
router.get("/auth/me", authMiddleware, authController.profile);
router.delete("/auth/logout", authMiddleware, authController.logout);
router.post(
  "/auth/refresh-token",
  validate(refreshTokenSchema),
  authController.refreshToken,
);
router.get("/auth/me/histories", authMiddleware, authController.loginHistories);
router.delete(
  "/auth/logout-device",
  authMiddleware,
  authController.logoutDevice,
);
router.delete(
  "/auth/logout-devices",
  authMiddleware,
  authController.logoutAllDeviceByUser,
);

export default router;
