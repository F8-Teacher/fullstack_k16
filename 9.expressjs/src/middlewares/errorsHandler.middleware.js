export const notFoundMiddleware = (req, res) => {
  //   res.send(`<h1>Không tìm thấy trang</h1>`);
  res.status(404).json({
    message: "Page not found",
  });
};

export const errorMiddleware = (error, req, res, next) => {
  console.log(error);

  res.status(500).json({
    message: "Server Error",
    error: error.message,
  });
};

//Check route
//api --> json
// --> html
