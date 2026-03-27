import { redisClient } from "./redis";
const prefix = "cache_";
export const cache = {
  remember: async <T>(
    key: string,
    callback: () => Promise<T>,
    seconds = 3600,
  ) => {
    const dataFromCache = await redisClient.get(`${prefix}${key}`);
    if (dataFromCache) {
      return JSON.parse(dataFromCache);
    }
    const dataFromDb = await callback();
    redisClient.setEx(`${prefix}${key}`, seconds, JSON.stringify(dataFromDb));
    return dataFromDb;
  },
  forever: async <T>(key: string, callback: () => Promise<T>) => {
    const dataFromCache = await redisClient.get(`${prefix}${key}`);
    if (dataFromCache) {
      return JSON.parse(dataFromCache);
    }
    const dataFromDb = await callback();
    redisClient.set(`${prefix}${key}`, JSON.stringify(dataFromDb));
    return dataFromDb;
  },
  forget: async (key: string) => {
    await redisClient.del(`${prefix}${key}`);
  },
  clear: async () => {
    const pattern = `${prefix}*`;
    const keys = await redisClient.keys(pattern);
    for (const key of keys) {
      redisClient.del(key);
    }
  },
  async invalidateList(key: string) {
    await redisClient.incr(`${prefix}${key}`);
  },
  async getVersionList(key: string) {
    const version = await redisClient.get(`${prefix}${key}`);
    if (!version) {
      this.invalidateList(key);
    }
    return version;
  },
};
