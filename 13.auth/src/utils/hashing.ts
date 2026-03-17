import bcrypt from "bcrypt";
const SALT_ROUND = 10;
export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, SALT_ROUND);
};

export const verifyPassword = (plainPassword: string, hashPassword: string) => {
  return bcrypt.compareSync(plainPassword, hashPassword);
};
