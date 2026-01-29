import express from "express";
import { homeController } from "../controllers/home.controller";
import { userController } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { userSchema } from "../validators/user.validator";
const router = express.Router();
router.get("/", homeController.index);

router.post("/users", validate(userSchema), userController.create);
export default router;
