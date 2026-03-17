import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const result = await authService.login(email, password);
      return res.json({
        data: result,
      });
    } catch (error) {
      console.log(error);

      return res.status(401).json({
        message: "Email hoặc mật khẩu không chính xác",
      });
    }
  },
  register: async (req: Request, res: Response) => {
    const user = await authService.register(req.body);
    return res.json({
      message: "Đăng ký tài khoản thành công",
      data: user,
    });
  },
  profile: async (req: Request, res: Response) => {
    return res.json({
      message: "Lấy thông tin user thành công",
      data: req.user,
    });
  },
  logout: async (req: Request, res: Response) => {
    await authService.logout(req.tokenJti!, req.tokenExp!);
    return res.json({});
  },
};
