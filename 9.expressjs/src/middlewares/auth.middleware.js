export const authMiddleware = (req, res, next) => {
  console.log("authMiddleware");
  const isAuth = true;
  if (!isAuth) {
    return res.send(`<h1>Không có quyền</h1>`);
  }
  req.user = "Hoàng An";
  next();
};
