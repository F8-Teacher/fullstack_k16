//Trong js tồn tại cả đồng bộ và bất đồng bộ

//1. Đồng bộ
// alert("Xin chào"); //Hàm đồng bộ
// console.log("Ok");

//2. Bất đồng bộ
// setTimeout(() => {
//   console.log("Hành động 1");
// }, 2000);
// console.log("Hành động 2");

//Xử lý bất đồng bộ là làm gì?
// => Biến tác vụ bất đồng bộ về đồng bộ --> Giải quyết các bài toán cần chờ đợi
//Ví dụ: Gọi dữ liệu từ server --> Chờ server trả về kết quả --> Hiển thị nội dung lên trình duyệt

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const user = ["User 1", "User 2", "User 3"];
//     if (typeof callback === "function") {
//       callback(user);
//     }
//   }, 2000);
// };
// const getProduct = (callback) => {
//   setTimeout(() => {
//     const user = ["Product 1", "Product 2", "Product 3"];
//     if (typeof callback === "function") {
//       callback(user);
//     }
//   }, 1000);
// };
// getUsers((users) => {
//   console.log(users);
//   getProduct((products) => {
//     console.log(products);
//   });
// });

//Promise Object
//Chaining: a().b().c().d()

//Trạng thái của promise
// - pending --> Chờ xử lý
// - fulfilled --> Xử lý thành công
// - rejected --> Xử lý thất bại

//Bước 1: Khởi tạo object promise
//new Promise(callback)
//callback có 2 tham số:
// - resolve --> Hàm
// - reject --> Hàm
const getUsers = () => {
  return new Promise((resolve, reject) => {
    //resolve là 1 hàm dùng để chứa dữ liệu khi thành công
    //reject là 1 hàm chứa dữ liệu khi thất bại
    setTimeout(() => {
      const user = ["User 1", "User 2", "User 3"];
      //   reject("Lỗi khi lấy user");
      resolve(user);
    }, 2000);
  });
};

//Bước 2: Sử dụng object promise để lấy kết quả
// getUsers()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Hoàn thành tác vụ");
//   });
const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = ["Product 1", "Product 2", "Product 3"];
      resolve(products);
    }, 1000);
  });
};
getUsers()
  .then((data) => {
    console.log(data);
    return getProducts();
  })
  .then((data) => {
    console.log(data);
  });
//Promise Chaining

//Buổi sau
// - Bài tập Promise
// - Promise.all()
// - try catch finally
// - Async function
// - Await keyword
