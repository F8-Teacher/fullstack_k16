import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const homeController = {
  index: (req: Request, res: Response) => {
    //Tiếp nhận -> xử lý request

    //Gọi service
    const users = userService.getAll();

    //Trả về response (view)
    res.json({ users });
  },
};
