import express from "express";
import cors from "cors";
import cookieParse from "cookie-parser";
import indexRouter from "./routes/index.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.router.js";
import { logggerMiddleware } from "./middlewares/logger.middleware.js";
import { roleMiddleware } from "./middlewares/role.middleware.js";
import {
  errorMiddleware,
  notFoundMiddleware,
} from "./middlewares/errorsHandler.middleware.js";
global.__ROOT = process.cwd();
const app = express();
app.use(express.static(__ROOT + "/public"));
app.use("/uploads", express.static(__ROOT + "/uploads"));
app.use(express.json()); //Nhận body là json
app.use(express.urlencoded()); //Nhận body là form-urlendcoded
//http method get
app.use(
  cors({
    origin: "http://127.0.0.1:63000",
    credentials: true,
  }),
);
app.use(cookieParse());
app.use(logggerMiddleware); //Gọi middleware
app.use(indexRouter);
app.use(authRouter);
app.use("/users", roleMiddleware, userRouter);

//Error Handler
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log(`Đang chạy server với url: http://localhost:3000`);
});

//http method:
//app.get()
//app.post()
//app.put()
//app.patch()
//app.delete()
