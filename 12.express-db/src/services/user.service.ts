import { prisma } from "../utils/prisma";

export const userService = {
  async getAll() {
    return await prisma.user.findMany({
      where: {
        OR: [
          {
            id: {
              gt: 3,
            },
          },
          {
            name: {
              contains: "r 4",
            },
          },
        ],
      },
    });
  },
  async find(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
  async create(body: { name: string; email: string }) {
    return await prisma.user.create({
      data: body,
    });
  },
  async update(body: { name: string; email: string }, id: number) {
    return await prisma.user.update({
      where: {
        id,
      },
      data: body,
    });
  },
  async delete(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
