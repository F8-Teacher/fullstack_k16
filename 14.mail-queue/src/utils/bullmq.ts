/* eslint-disable no-unused-vars */
import { ConnectionOptions, Job, Queue, Worker } from "bullmq";
import IORedis from "ioredis";
const connectionQueue = new IORedis({
  port: 6378,
});
export const connectionWorker = new IORedis({
  port: 6378,
  maxRetriesPerRequest: null,
});

export const bullMq = {
  createQueue: (name: string) => {
    const queue = new Queue(name, {
      connection: connectionQueue as ConnectionOptions,
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
      },
    });
    return queue;
  },
  createWorker: (name: string, callback: (job: Job) => Promise<unknown>) => {
    return new Worker(name, callback, {
      connection: connectionWorker as ConnectionOptions,
    });
  },
};
