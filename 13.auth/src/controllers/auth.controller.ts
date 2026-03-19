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
    } catch {
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
  refreshToken: async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const newToken = await authService.refreshToken(refreshToken);
    return res.json({
      message: "Refresh token thành công",
      data: newToken,
    });
  },
  loginHistories: async (req: Request, res: Response) => {
    const histories = await authService.getLoginHistories(req.user!.id);
    return res.json({
      data: histories,
    });
  },
  logoutDevice: async (req: Request, res: Response) => {
    const { deviceId } = req.body;
    await authService.logoutDevice(deviceId, req.user!.id);
    return res.json({
      message: "Logout device thành công",
    });
  },
  logoutAllDeviceByUser: async (req: Request, res: Response) => {
    await authService.logoutAllDeviceByUser(req.user!.id);
    return res.json({});
  },
};

/*
Login --> Tạo access token, refresh token
Refresh token -->
+ Verify refresh token xem có hợp lệ không?
+ Decoded refresh token để lấy userId
+ Tạo access token mới với userId đã lấy được

Refresh token rotation

Request /refresh-token 
+ Cấp access mới
+ Cấp refresh mới
+ Thu hồi refresh cũ
*/
