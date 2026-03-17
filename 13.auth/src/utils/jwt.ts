import jsonwebtoken, { JwtPayload } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRED = process.env.JWT_EXPIRED as unknown as number;
export const createToken = (payload: JwtPayload) => {
  return jsonwebtoken.sign(
    { ...payload, jti: crypto.randomUUID() },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRED,
    },
  );
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jsonwebtoken.verify(token, JWT_SECRET);
    return decoded;
  } catch {
    return false;
  }
};

//Khi tạo token
// - mã số bí mật
// - thời gian sống
