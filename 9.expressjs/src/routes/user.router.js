import express from "express";
import { roleMiddleware } from "../middlewares/role.middleware.js";
const router = express.Router();

router.get("/", (req, res) => {
  const query = req.query;
  // const apiKey = req.headers["x-api-key"];
  // console.log(apiKey);
  const apiKey = req.get("x-api-key");
  //   console.log(apiKey);

  // res.set("x-api-key2", "456");
  res.header("x-api-key2", "ahihi");
  res.json({
    success: true,
    message: "Get user success",
  });
});

// router.use(roleMiddleware);

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    data: "Detail user: " + id,
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);

  res.status(201).json({
    message: "Create user",
  });
});

export default router;
