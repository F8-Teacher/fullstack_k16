import { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validate = (schema: z.ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = await schema.safeParseAsync(req.body);

    if (!body.success) {
      const errors = Object.fromEntries(
        body.error.issues.map(({ path, message }) => [path[0], message]),
      );
      return res.status(400).json({
        message: "Validate failed",
        errors,
      });
    }
    req.body = body.data;
    next();
  };
};
//Mass assignment vulnerability
