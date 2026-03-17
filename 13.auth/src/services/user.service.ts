import { UserData } from "../types/user.type";
import { hashPassword } from "../utils/hashing";
import { prisma } from "../utils/prisma";

export const userService = {
  async existingEmail(email: string) {
    const count = await prisma.user.count({
      where: {
        email,
      },
    });
    return count;
  },
  async create(userData: UserData) {
    const user = await prisma.user.create({
      data: {
        ...userData,
        password: hashPassword(userData.password),
      },
    });
    return user;
  },
  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  },
  async find(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      omit: {
        password: true,
      },
    });
    return user;
  },
};
