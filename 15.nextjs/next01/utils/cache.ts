export const clearCachePath = async (path: string) => {
  await fetch(`/api/cache`, {
    method: "DELETE",
    body: JSON.stringify({ value: path, type: "path" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const clearCacheTag = async (tag: string) => {
  await fetch(`/api/cache`, {
    method: "DELETE",
    body: JSON.stringify({ value: tag, type: "tag" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
