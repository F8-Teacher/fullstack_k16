"use strict";
// let a: unknown = "An";
Object.defineProperty(exports, "__esModule", { value: true });
// if (typeof a === "string") {
//   let b: string = a;
// }
// const getMessage = (): void | string => {
//   let check = true;
//   if (check) {
//     return "Hoàng An";
//   }
// };
// const users: string[] = ["User 1", "User 2", "User 3"];
// const myArr: [string, number, boolean] = ["An", 30, false];
// const user: {
//   name: string;
//   age: number;
//   isSenior?: boolean;
//   details: {
//     province: string;
//   };
// } = {
//   name: "Hoàng An",
//   age: 34,
//   details: {
//     province: "Hà Nội",
//   },
// };
// type Address = {
//   province: string;
// };
// type Address2 = {
//   ward: string;
// };
// type User = {
//   id: number;
//   name: string;
//   address?: Address;
// };
// const users: User[] = [
//   {
//     id: 1,
//     name: "User 1",
//     address: {
//       province: "Hà Nội",
//     },
//   },
//   {
//     id: 2,
//     name: "User 2",
//     address: {
//       province: "Hồ Chí Minh",
//     },
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];
// const address: Address & Address2 = {
//   province: "Đà Nẵng",
//   ward: "Ahihi",
// };
// interface User {
//   name: string;
//   email: string;
// }
// interface Authentication extends User {
//   isLogin: () => boolean;
// }
// const user: Authentication = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   isLogin() {
//     return true;
//   },
// };
// interface ErrorWithStatus extends Error {
//   status?: number;
// }
// try {
//   const a: number = -1;
//   if (a < 0) {
//     const err: ErrorWithStatus = new Error();
//     err.status = 400;
//     throw err;
//   }
// } catch (error) {
//   if (error instanceof Error) {
//     const err: ErrorWithStatus = error;
//     console.log(err.message);
//     console.log(err.status);
//   }
// }
// const a: number = 10;
// const b: string = a as unknown as string;
// const doSomething = (a: "A" | "B" | "C") => {
//   console.log(a);
// };
// doSomething("B");
// type Todo<T> = {
//   id: number;
//   title: string;
//   completed: boolean;
//   info?: T;
// };
// const todos: Todo<unknown>[] = [
//   {
//     id: 1,
//     title: "Todo 1",
//     completed: true,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     completed: false,
//   },
// ];
// const todos2: Todo<{ createdAt: string }>[] = [
//   {
//     id: 1,
//     title: "Todo 1",
//     completed: true,
//     info: {
//       createdAt: "ahihi",
//     },
//   },
// ];
// const todos3: Todo<{ updatedAt: string }>[] = [
//   {
//     id: 1,
//     title: "Todo 1",
//     completed: true,
//     info: {
//       updatedAt: "ahihi",
//     },
//   },
// ];
//Ví dụ:
// const myPromise = Promise.resolve([
//   {
//     id: 1,
//     title: "Todo 1",
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//   },
//   {
//     id: 3,
//     title: "Todo 3",
//   },
// ]);
// const showTodos = async (): Promise<
//   {
//     id: number;
//     title: string;
//   }[]
// > => {
//   const todoList = await myPromise;
//   return todoList;
// };
//# sourceMappingURL=ex01.js.map