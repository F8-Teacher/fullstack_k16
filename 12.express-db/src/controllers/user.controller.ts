import { Request, Response } from "express";
import { connection } from "../utils/db";

export const userController = {
  create: async (req: Request, res: Response) => {
    //req.body
    res.json({
      message: "Create user Success",
      data: req.body,
    });
  },
  index: async (req: Request, res: Response) => {
    const db = await connection;
    const [users] = await db.query(`SELECT * FROM users`);
    res.json({ users });
  },
};
