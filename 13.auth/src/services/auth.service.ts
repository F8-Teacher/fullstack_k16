import { JwtPayload } from "jsonwebtoken";
import { UserData } from "../types/user.type";
import { verifyPassword } from "../utils/hashing";
import { createToken, verifyToken } from "../utils/jwt";
import { redisClient } from "../utils/redis";

import { userService } from "./user.service";

export const authService = {
  async register(userData: UserData) {
    //Thêm dữ liệu vào bảng users --> gọi userService
    const user = await userService.create(userData);
    //Gửi email
    //Tạo token
    return user;
  },
  async login(email: string, password: string) {
    //Kiểm tra email có tồn tại hay không? => Trả về thông tin user thông qua email
    const user = await userService.findByEmail(email);
    if (!user) {
      throw new Error("NOT_FOUND_USER");
    }

    //Verify password

    if (!verifyPassword(password, user.password!)) {
      throw new Error("PASSWORD_WRONG");
    }

    //Tạo token
    const accessToken = createToken({
      id: user.id,
    });
    return { accessToken };
  },
  async profile(token: string) {
    //Verify token
    const decoded = verifyToken(token) as JwtPayload & { id: number };
    if (!decoded) {
      throw new Error("TOKEN_INVALID");
    }
    //Kiểm tra blacklist
    if (await this.verifyBlacklist(decoded.jti!)) {
      throw new Error("TOKEN_BLACKLIST");
    }
    const user = await userService.find(decoded.id);
    return { user, decoded };
  },
  async logout(jti: string, exp: number) {
    //redis: set expire nhận vào thời gian tồn tại chứ không phải timestamp
    const seconds = Math.floor(exp - Date.now() / 1000);
    (await redisClient).setEx(`blacklist:${jti}`, seconds, jti);
    return true;
  },
  async verifyBlacklist(jti: string) {
    const blacklist = await (await redisClient).get(`blacklist:${jti}`);
    return blacklist;
  },
};

//Blacklist lưu gì? --> lưu jti (JWT ID)
//Lưu blacklist ở đâu?
// + Database
// + Redis *

//AccessToken tạo ra --> không xóa được
//Revoke AccessToken
// - lấy jti
// - lấy exp
// - lưu jti vào redis với expire lấy được
