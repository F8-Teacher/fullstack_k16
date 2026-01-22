import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = express.Router();
router.get("/", (req, res, next) => {
  next(new Error("Lỗi gì đó"));
  res.send(`<h1>Home</h1>`);
});
router.get("/about", authMiddleware, (req, res) => {
  res.send(`<h1>About: ${req.user}</h1>`);
});

export default router;
