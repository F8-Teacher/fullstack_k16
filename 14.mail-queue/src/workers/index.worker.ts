import { Job } from "bullmq";
import { bullMq } from "../utils/bullmq";
import { sendMailTemplate } from "../utils/mail";
bullMq.createWorker("EMAIL_QUEUE", async (job: Job) => {
  if (job.name === "send-email-register") {
    //Xử lý logic gửi email chào mừng
    const data = job.data;
    console.log(`Đang gửi email`);
    await sendMailTemplate(data.to, data.subject, data.template, data.options);
    //nếu bị throw -> gắn job failed
  }

  if (job.name === "send-email-verify") {
    //Logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("send-email-verify");
  }
});

//cronjob
//cache (redis)
//oauth 2.0
//ubuntu, vps (aws), deploy
