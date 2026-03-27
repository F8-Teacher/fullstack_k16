import express from "express";
import { indexController } from "../controllers/index.controller";
import { postController } from "../controllers/post.controller";
import { authController } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", indexController.index);
router.get("/job", indexController.job);
router.get("/open-mail", indexController.openMail);
router.get("/redirect", indexController.redirectLink);

router.get("/posts", postController.index);
router.get("/posts/:id", postController.find);
router.post("/posts", postController.create);

router.get("/auth/google", authController.googleRedirect);
router.get("/auth/google/callback", authController.googleCallback);
router.post("/auth/google/login", authController.googleLogin);

export default router;
