import { Request, Response } from "express";
const CLIENT_ID =
  "213612868865-c1q8kdrres8vomu5oueo314igfagtboc.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const CALLBACK_URI = "http://localhost:3000/auth/google/callback";
const FRONTEND = "http://localhost:5173";
export const authController = {
  googleRedirect(req: Request, res: Response) {
    const url = `https://accounts.google.com/o/oauth2/v2/auth`;
    const query = {
      client_id: CLIENT_ID,
      redirect_uri: CALLBACK_URI,
      response_type: "code",
      scope: "email profile",
      access_type: "offline",
    };
    const linkRedirect = `${url}?${new URLSearchParams(query)}`;
    res.redirect(linkRedirect);
  },
  async googleCallback(req: Request, res: Response) {
    //Lấy code
    //Redirect về frontend kèm theo code
    //Front-End dùng code để gọi đến 1 api bên back-end để back-end xử lý phần còn lại
    // - Đổi access token của google
    // - Đổi user của google
    // - Create hoặc find user của database
    // - Tạo JWT token và trả về cho client
    const code = req.query.code;
    res.redirect(`${FRONTEND}?code=${code}`);
  },

  async googleLogin(req: Request, res: Response) {
    const code = req.body.code;
    const responseToken = await fetch(`https://oauth2.googleapis.com/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: CALLBACK_URI,
        grant_type: "authorization_code",
      }),
    });
    const { access_token: accessToken } = await responseToken.json();
    if (accessToken) {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      const data = await response.json();
      //Xử lý db
      //Tạo token
      return res.json({ data });
    }
    res.json({});
  },
};
