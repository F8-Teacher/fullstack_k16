import { Request, Response } from "express";
import { emailQueue } from "../queues/email.queue";

export const indexController = {
  index: async (req: Request, res: Response) => {
    // const info = await sendMailTemplate(
    //   "hoangan@fullstack.edu.vn",
    //   "Test email template",
    //   "welcome-register",
    //   {
    //     name: "Hoàng An",
    //     email: "hoangan.web@gmail.com",
    //     link: "https://f8.edu.vn",
    //     mailId: 1,
    //   },
    // );
    // res.json({
    //   info,
    // });
    const job = await emailQueue.add(
      "send-email-register",
      {
        to: "hoangan@fullstack.edu.vn",
        subject: "Test email template",
        template: "welcome-register",
        options: {
          name: "Hoàng An",
          email: "hoangan.web@gmail.com",
          link: "https://f8.edu.vn",
        },
      },
      {
        attempts: 3, //Thử lại 3 lần nếu có lỗi xảy ra
        backoff: {
          type: "exponential",
          delay: 3000, //Khoảng thời gian delay giữa mỗi lần thử lâij
        },
      },
    );
    res.json({ job });
  },
  job: (req: Request, res: Response) => {
    emailQueue.add("send-email-verify", {});
    return res.json({});
  },
  openMail: (req: Request, res: Response) => {
    const mailId = req.query.mailId;
    //Update database
  },
  redirectLink: (req: Request, res: Response) => {
    const link = req.query.link;
    //Cập nhật database
    return res.redirect(link as unknown as string);
  },
};

//Ví dụ: Chèn link: https://f8.edu.vn
// --> Chèn vào mail: <a href="http://localhost:3000/redirect?link=https://f8.edu.vn">https://f8.edu.vn</a>
