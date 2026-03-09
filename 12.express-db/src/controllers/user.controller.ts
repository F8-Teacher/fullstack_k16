import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  index: async (req: Request, res: Response) => {
    const users = await userService.getAll();
    res.json(users);
  },
  find: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.find(+id!);
    res.json(user);
  },
  create: async (req: Request, res: Response) => {
    const user = await userService.create(req.body);
    res.json({ user });
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.update(req.body, +id!);
    res.json(user);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.delete(+id!);
    res.json(user);
  },
};
