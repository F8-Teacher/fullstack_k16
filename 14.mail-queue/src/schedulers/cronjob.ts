import cron from "node-cron";
cron.schedule("*/10 * * * * *", () => {
  //Gọi hàm cần xử lý
  console.log(`Cronjob running: ${Date.now()}`);
});
