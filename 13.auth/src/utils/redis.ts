import { createClient } from "redis";
export const redisClient = createClient({
  url: "redis://localhost:6378",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();
