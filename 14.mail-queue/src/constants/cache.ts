import crypto from "crypto";
const PREFIX = "ecommerce";
export const CACHE_KEY = {
  posts: {
    version: "v2",
    listVersion: "post:list-version",
    list(listVersion = 1, query: { [key: string]: string }) {
      const hashQuery = crypto
        .createHash("md5")
        .update(JSON.stringify(query))
        .digest("hex");
      return `${PREFIX}:${this.version}:posts:list:v${listVersion}:${hashQuery}`;
    },
    detail(id: number) {
      return `${PREFIX}:${this.version}:posts:detail:${id}`;
    },
  },
};

export const CACHE_TTL = {
  posts: {
    list: 3600,
    detail: 1000,
  },
};
