import express from "express";
import { homeController } from "../controllers/home.controller";
import { userController } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { userSchema } from "../validators/user.validator";
import { uploadController } from "../controllers/upload.controller";
import { upload } from "../middlewares/upload.middleware";
const router = express.Router();
router.get("/", homeController.index);
router.get("/gioi-thieu", homeController.about);
router.post("/users", validate(userSchema), userController.create);

router.get("/uploads", uploadController.viewForm);
router.post("/uploads", upload.single("image"), uploadController.upload);
export default router;
