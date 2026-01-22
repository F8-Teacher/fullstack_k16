import express from "express";
const router = express.Router();
router.get("/auth/login", (req, res) => {
  const username = req.query.username;
  res.set("Set-Cookie", `username=${username};path=/;max-age=3600;httpOnly`);
  // res.redirect(`http://127.0.0.1:63000/demo.html`);
  res.set("Location", "http://127.0.0.1:63000/demo.html");
  //Chuyển hướng
  res.status(301).send();
});

router.get("/auth/me", (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    res.status(401).json({
      message: "Unauthorize",
    });
  }
  res.json({
    data: username,
  });
});
export default router;
