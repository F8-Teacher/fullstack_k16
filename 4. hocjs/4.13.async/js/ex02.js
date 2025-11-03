const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "User 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "User 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "User 3",
          salary: 3000,
        },
        {
          id: 4,
          name: "User 4",
          salary: 4000,
        },
      ];
      const user = users.find((user) => user.id === userId);
      //   reject("Lỗi khi lấy user");
      resolve(user);
    }, Math.random() * 2000);
  });
};

const ids = [1, 3, 4]; //Danh sách các userId
// const totalPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     getUser(userId).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });

// totalPromise.then((data) => {
//   console.log(data);
// });

//Làm sao để hiển thị được total ngoài vòng lặp?
//Gợi ý: Đưa total vào promise mới

//Promise 1 --> Resolve --> Result 1
//Promise 2 --> Resolve --> Result 2
//Promise 3 --> Resolve --> Result 3

//Promise.all(arrayPromise)
// const arrayPromise = ids.map((userId) => getUser(userId));
// Promise.all(arrayPromise).then((data) => {
//   console.log(data);
//   const total = data.reduce((acc, cur) => acc + cur.salary, 0);
//   console.log(total);
// });

//try catch
/*
try {
    Lệnh 1
    Lệnh 2
    Lệnh 3
} catch (error) {
    Error
} finally {
    Code
}
*/
// console.log("Start");
// const abc = () => {};
// const ahihi = () => {};
// let a = -1;
// try {
//   abc();
//   ahihi();
//   if (a < 0) {
//     const error = new Error("a phải là số dương");
//     error.status = 500;
//     throw error;
//   }
//   console.log("F8");
// } catch (error) {
//   //Error
//   //   console.dir(error);
//   console.log(error.message);
//   console.log(error.status);

//   //   console.log("Đã có lỗi xảy ra");
// } finally {
//   console.log("hoàn thành");
// }
// console.log("Continue");

//Async function
// - Luôn trả về 1 promise
// - Dùng cho await
//Await keyword
// - Chờ khi nào promise trả về kết quả (Sau await phải là promise, 1 await tương ứng với 1 lần then)
// - await phải nằm trong async function (Trừ môi trường nodejs)

// const doSomething = async () => {
//   try {
//     const user1 = await getUser(1);
//     console.log(user1);
//   } catch (error) {
//     console.log(error);
//   }
// };
// doSomething();
// console.log(doSomething());

// async function doSomething2() {}

//IIFE
// (async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     const user = await getUser(userId);
//     total += user.salary;
//   }
//   console.log(total);
// })();

//Bài tập
// const myPromise = new Promise((resolve) => {
//   resolve({
//     getContent: () => new Promise((resolve) => resolve("F8")),
//   });
// });
// (async () => {
//   //Truy cập vào myPromise và log ra chữ F8
//   //   const content = await myPromise;
//   //   const text = await content.getContent();
//   //   console.log(text);
//   const text = await (await myPromise).getContent();
//   console.log(text);
// })();

// setTimeout(() => {
//   console.log(2);
// }, 0);
// Promise.resolve(1).then((data) => {
//   console.log(data);
// });

// console.log(3); //call stack
