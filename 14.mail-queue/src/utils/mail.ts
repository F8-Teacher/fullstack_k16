import nodemailer from "nodemailer";
import ejs from "ejs";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import path from "node:path";

let transporterInstance: nodemailer.Transporter<
  SMTPTransport.SentMessageInfo,
  SMTPTransport.Options
> | null = null;
export const mailTransporter = () => {
  if (!transporterInstance) {
    transporterInstance = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_PORT!,
      secure: +process.env.SMTP_PORT! === 465, // Use true for port 465, false for port 587
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  return transporterInstance;
};

export const sendMail = async (
  to: string,
  subject: string,
  message: string,
) => {
  const transporter = mailTransporter();
  const info = await transporter.sendMail({
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM}>`,
    to,
    subject,
    html: message, // HTML version of the message
  });
  return info;
};

export const sendMailTemplate = async <T>(
  to: string,
  subject: string,
  template: string,
  data: T = {} as T,
) => {
  const templatePath = path.join(
    process.cwd(),
    "src",
    "templates",
    `${template}.ejs`,
  );
  const html = await ejs.renderFile(templatePath, data!);
  return sendMail(to, subject, html);
};
