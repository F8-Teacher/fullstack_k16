import { CACHE_KEY, CACHE_TTL } from "../constants/cache";
import { cache } from "../utils/cache";
import { prisma } from "../utils/prisma";
export const postService = {
  async findAll(query: { search: string }) {
    //Kiểm tra bộ nhớ đệm xem có hay không?
    const listVer = await cache.getVersionList(CACHE_KEY.posts.listVersion);
    const key = CACHE_KEY.posts.list(+listVer!, query);
    // const seconds = 3600;
    return cache.remember(
      key,
      () =>
        prisma.post.findMany({
          omit: {
            content: true,
            updatedAt: true,
          },
          where: {
            title: {
              contains: query.search,
            },
          },
        }),
      CACHE_TTL.posts.list,
    );
  },
  find(id: number) {
    const key = `post:${id}`;
    return cache.remember(key, () =>
      prisma.post.findUnique({
        where: {
          id,
        },
      }),
    );
  },
  async create(data: { title: string; content: string }) {
    //invalidate --> vô hiệu hóa
    //revalidate --> làm mới
    const post = await prisma.post.create({
      data,
    });
    if (post) {
      //   cache.forget("post-list");
      await cache.invalidateList(CACHE_KEY.posts.listVersion);
    }
    return post;
  },
};

//Versioning
//Cache tags
