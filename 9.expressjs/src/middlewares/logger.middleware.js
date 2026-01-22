export const logggerMiddleware = (req, res, next) => {
  console.log("Log middleware");
  next();
};
