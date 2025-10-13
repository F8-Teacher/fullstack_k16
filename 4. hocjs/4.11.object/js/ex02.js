//Thuộc tính: key trong object có kiểu dữ liệu không phải là hàm
//Phương thức: key trong object có kiểu dữ liệu là hàm

// function sayHi() {
//   return "sayHi";
// }
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return "Hoàng An";
//   },
//   doSomething() {
//     return "Cái gì đó";
//   },
//   sayHi,
// };
// console.log(user);
// console.log(user.getName());
// console.log(user.doSomething());
// console.log(user.sayHi());
// console.log(sayHi());

//Từ khóa this (Hay còn gọi là ngữ cảnh, context)
// - Ám chỉ object bọc hàm
// - Chỉ dùng trong hàm
// function something() {
//   console.log(this);
// }
// something();
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     console.log(this);
//   },
//   getInfo: function () {
//     // const _this = this;
//     return {
//       //Thằng này
//       age: 34,
//       getEmail: () => {
//         console.log(this);
//       },
//     };
//   },
// };
// user.getName();
// user.getInfo().getEmail();

// const f8 = {
//   start: (value) => {
//     let result = value;
//     return {
//       add(value) {
//         result += value;
//         return this;
//       },
//       minus(value) {
//         result -= value;
//         return this;
//       },
//       multi(value) {
//         result *= value;
//         return this;
//       },
//       divi(value) {
//         result /= value;
//         return this;
//       },
//       get() {
//         return result;
//       },
//     };
//   },
// };
//f8.start(10).add(20).minus(5).multi(3).divi(2).get();
//Lưu ý: add, minus, multi, divi có thể đảo thứ tự
// console.log(f8.start(10).add(20).minus(5).multi(3).divi(2).get());

// const f8 = {
//   start: (value) => {
//     let result = value;
//     return {
//       //Thằng này
//       add: function (value) {
//         result = result + value;
//         return this;
//       },
//       minus: function (value) {
//         result = result - value;
//         return this;
//       },
//       multi: function (value) {
//         result = result * value;
//         return this;
//       },
//       divi: function (value) {
//         result = result / value;
//         return this;
//       },
//       get: function () {
//         return result;
//       },
//     };
//   },
// };
// const result = f8.start(10).multi(3).add(20).minus(5).divi(2).get();
// console.log(result);

//Strict mode: Chế độ nghiêm ngặt
//Normal mode: Chế độ bình thường
// "use strict";
// a = 10;
// console.log(a);

// function doSomething() {
//   console.log(this);
// }
// doSomething();

// const user = {
//   name: "hoàng an"
// };
// delete user;
// console.log(user);

//Prototype: Object cho phép định nghĩa các thuộc tính, phương thức để tái sử dụng ở các object khác

// Object.prototype.message = "F8";
// Object.prototype.getMessage = function () {
//   return "Học js không khó";
// };

// const a = {
//   x: 10,
// };
// const b = {
//   y: 20,
// };
// console.log(a);

// console.log(a.message);
// console.log(b.message);
// console.log(a.getMessage());

// let fullname = "Hoàng An";
// console.log(fullname.message);
// // console.dir(String);
// Array.prototype.latest = "Hoàng an";
// const users = [];
// console.log(users);
// console.log(users.message);
// console.log(users.latest);

//Object -> Constuctor --> Instance
//users = [] --> Instance của Array
//fullname = "Hoàng An" ==> Instance của String
//age = 34 ==> Instance của Number
//status = true ==> Instance của Boolean
//user = {} ==> Instance của Object (Literal Object)

//Kiểm tra Constructor của 1 instance
// const users = [];
// console.log(users.constructor.name); //Trả về string
// console.log(users instanceof Array);

//Optional Chaining
// const user = {
//   info: {
//     email: {
//       domain: "fullstack.edu.vn",
//     },
//   },
// };
// console.log(user?.email);
// console.log(user.info.email?.domain);
// if (user && user.info && user.info.email && user.info.email.domain) {
//   console.log(user.info.email.domain);
// }
// if (user?.info?.email?.domain) {
//   console.log(user.info.email.domain);
// }

//setter, getter
// const myObj = {
//   data: null,
//   get length() {
//     return this.data;
//   },
//   set length(value) {
//     this.data = value;
//   },
// };
// myObj.length = 30; //gọi setter
// myObj.length += 10;
// console.log(myObj.length); //gọi getter

//Mong muốn
//myObj.length --> Trả về giá trị
//myObj.length = 20 --> Cập nhật giá trị

//Constructor
// - Function Constructor
// - Class

//Đặt tên constructor:
// - Dùng quy tắc PascalCase
// - Sử dụng danh từ
// - Không được dùng Arrow Function
//HomeController, ProductCategoryController,...
// function User(name, email) {
//   //Thuộc tính
//   this.name = name;
//   this.email = email;
//   //Phương thức
//   this.getName = function () {
//     return this.name;
//   };
//   this.getEmail = function () {
//     return this.email;
//   };
// }

//Thêm phương thức, thuộc tính từ bên ngoài --> Dùng Prototype
// User.prototype.message = "F8";

//Khởi tạo instance từ constructor
// const user1 = new User("User 1", "user1@gmail.com");
// console.log(user1);
// const user2 = new User("User 2", "user2@gmail.com");
// console.log(user2);

//Class
class User {
  //Thuộc tính
  //   name = "Hoàng An";
  //   email = "hoangan.web@gmail.com";
  //Hàm khởi tạo:
  // - Nhận đối số khi tạo instance
  // - Chạy ngay khi tạo instance
  #email; //Khai báo thuộc tính private
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }
  //Phương thức
  getName() {
    return this.name;
  }
  getEmail() {
    return this.#email;
  }
}
//Instance
const user1 = new User("User 1", "user1@gmail.com");
console.log(user1);
// console.log(user1.#email);
console.log(user1.getEmail());

//Buổi sau:
// - Static method, static property
// - extends
// - setter, getter
// - So sánh object, array
// - Hàm đệ quy
// - Sao chép array, object:
// + shallow copy
// + deep copy
