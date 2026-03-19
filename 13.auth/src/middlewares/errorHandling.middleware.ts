/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { HttpException } from "../utils/exception";

export const errorHandlingMiddleware = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(err.status || 500).json({
    message: err.message || "Server Error",
  });
};
