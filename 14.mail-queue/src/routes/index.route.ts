import express from "express";
import { indexController } from "../controllers/index.controller";

const router = express.Router();

router.get("/", indexController.index);
router.get("/job", indexController.job);
router.get("/open-mail", indexController.openMail);
router.get("/redirect", indexController.redirectLink);

export default router;
