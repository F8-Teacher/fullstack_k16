import { subscriptionQueue } from "../queues/subscription.queue";

subscriptionQueue.upsertJobScheduler(
  "subscription",
  {
    pattern: "*/10 * * * * *",
  },
  {
    name: "subscription-expired",
    data: { userId: 1 },
  },
);
