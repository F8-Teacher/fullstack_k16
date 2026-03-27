import { bullMq } from "../utils/bullmq";
export const subscriptionQueue = bullMq.createQueue("SUBSCRIPTION_QUEUE");
