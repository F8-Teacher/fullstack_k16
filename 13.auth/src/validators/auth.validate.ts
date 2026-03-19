import z from "zod";
import { userService } from "../services/user.service";

export const registerSchema = z.object({
  name: z.string().min(1, "Tên không được để trống"),
  email: z
    .string()
    .min(1, "Email không được để trống")
    .pipe(z.email("Email không đúng định dạng"))
    .refine(
      async (email: string) => {
        const existingEmail = await userService.existingEmail(email);
        return !existingEmail;
      },
      {
        message: "Email đã tồn tại",
      },
    ),
  password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email không được để trống")
    .pipe(z.email("Email không đúng định dạng")),

  password: z.string().min(6, "Mật khẩu phải từ 6 ký tự"),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "Chưa cung cấp refresh token"),
});
