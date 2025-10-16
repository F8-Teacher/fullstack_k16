//static method, static property
//Lưu ý:
// - static phải gọi từ class (TenClass.tenthuoctinh, TenClass.tenphuongthuc())
// - this trong static method sẽ trả về chính class đó

// class User {
//   static data = ["User 1", "User 2", "User 3"];
//   static message = "Học lập trình không khó";
//   email = "hoangan.web@gmail.com"; //non-static
//   static getEmail() {
//     //Truy cập vào email
//     //this = class User --> Không truy cập vào được email
//     //Muốn truy cập vào email --> Khởi tạo instance
//     const instance = new this();
//     return instance.email;
//   }
//   static getMessage() {
//     return "Học lập trình quá khó";
//   }

//   get latest() {
//     // return User.data[User.data.length - 1];
//     //this là instance
//     //Việc cần làm: Chuyển thành class
//     const data = this.constructor.data;
//     return data[data.length - 1];
//   }
//   set latest(value) {
//     console.log(value);
//   }
// }
// console.log(User.getEmail());

// console.log(User.message);
// console.log(User.getMessage());
// const user = new User();
// console.log(user.latest); //User 3
// user.latest = "Ok chưa?";

//Kế thừa
//A:
// - method 1
// - property 1

//B kế thừa từ A
//B được sử dụng method 1, property 1

// class Person {
//   constructor(name, email) {
//     // console.log(`person constructor`);
//     this.name = name;
//     this.email = email;
//   }
// }

// class Boy extends Person {
//   gender = "male";
//   constructor(name, email, age) {
//     super(name, email); //gọi constructor của class cha
//     // console.log("boy constructor");
//     this.age = age;
//   }
//   getInfo() {
//     return [this.name, this.email, this.gender, this.age];
//   }
// }
// const boy1 = new Boy("Hoàng An", "hoangan.web@gmail.com", 33);
// console.log(boy1.getInfo());

//So sánh object
// - Object là kiểu tham chiếu
// - So sánh theo địa chỉ

//Đệ quy: Gọi lại chính hàm đang định nghĩa
// const a = {
//   x: 10,
//   y: 20,
//   meta: {
//     z: 10,
//     k: 20,
//     children: {
//       name: "an",
//     },
//   },
// };
// const b = {
//   x: 10,
//   y: 20,
//   meta: {
//     z: 10,
//     k: 20,
//     children: {
//       name: "an",
//     },
//   },
// };
// const isObject = (obj) => {
//   //typeof = object
//   //Không phải mảng
//   //Khác null
//   return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// };
// const compareObj = (obj1, obj2) => {
//   //So sánh length
//   const length1 = Object.keys(obj1).length;
//   const length2 = Object.keys(obj2).length;
//   if (length1 !== length2) {
//     return false;
//   }
//   for (let key in obj1) {
//     if (isObject(obj1[key])) {
//       //Điều kiện cơ sở
//       return compareObj(obj1[key], obj2[key]);
//     }
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };
// compareObj(a, b);
// console.log(compareObj(a, b));

// const showNumber = (n) => {
//   //Phần cơ sở
//   //Gọi hàm đệ quy
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

// const menus = [
//   { text: "Trang chủ", icon: "", href: "#", target: "_self", title: "" },
//   { text: "Giới thiệu", icon: "empty", href: "#", target: "_self", title: "" },
//   {
//     text: "Sản phẩm",
//     icon: "empty",
//     href: "#",
//     target: "_self",
//     title: "",
//     children: [
//       {
//         text: "Sản phẩm 1",
//         icon: "empty",
//         href: "#",
//         target: "_self",
//         title: "",
//         children: [
//           {
//             text: "Sản phẩm 1.1",
//             icon: "empty",
//             href: "",
//             target: "_self",
//             title: "",
//           },
//         ],
//       },
//       {
//         text: "Sản phẩm 2",
//         icon: "empty",
//         href: "#",
//         target: "_self",
//         title: "",
//       },
//       {
//         text: "Sản phẩm 3",
//         icon: "empty",
//         href: "#",
//         target: "_self",
//         title: "",
//       },
//     ],
//   },
//   {
//     text: "Tin tức",
//     icon: "empty",
//     href: "Tin tức",
//     target: "_self",
//     title: "",
//     children: [
//       {
//         text: "Tin tức 1",
//         icon: "empty",
//         href: "",
//         target: "_self",
//         title: "",
//       },
//     ],
//   },
//   { text: "Liên hệ", icon: "empty", href: "", target: "_self", title: "" },
// ];

// let html = "";
// const buildMenu = (menuData) => {
//   html += "<ul>\n";
//   menuData.forEach((menuItem) => {
//     html += `<li><a href="${menuItem.href}">${menuItem.text}</a>\n`;
//     //Gọi lại hàm đệ quy ở đây
//     if (menuItem.children?.length) {
//       buildMenu(menuItem.children);
//     }
//     html += "</li>\n";
//   });
//   html += "\n</ul>";
// };
// buildMenu(menus);

// console.log(html);
// document.body.innerHTML = html;

//Copy object
// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   meta: {
//     x: 10,
//   },
//   doSomething() {
//     console.log("ok");
//   },
// };
// const b = a; //a, b cùng địa chỉ
// const b = Object.assign({}, a); //copy được 1 cấp (shallow copy)
// const b = { ...a }; //Spread
//Deep copy
// - Chuyển object sang json (Định dạng dữ liệu)
// - Chuyển json ngược về object
//Lưu ý: Nếu trong object có hàm, không chuyển được
// const json = JSON.stringify(a);
// const b = JSON.parse(json);
// b.name = "Sơn";
// b.age = 33;
// b.meta.x = 20;
// console.log(a);
// console.log(b);

//Array copy
// const a = ["An", 33];
// const b = a;
//Shallow copy
// - Dùng các phương xử lý mảng có trả về mảng mới: slice, map, filter, reduce
// - Dùng spread
// const b = a.slice(0);
// const b = [...a];

//Deep copy
// - Chuyển về json
// - Chuyển ngược lại
// const json = JSON.stringify(a);
// const b = JSON.parse(json);
// b[0] = "Sơn";
// console.log(a);
// console.log(b);

//Ví dụ về tham chiếu
// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
//   {
//     id: 3,
//     name: "User 3",
//   },
// ];
//Tìm user có id = 2 --> Xóa name
// const user = users.find((user) => user.id === 2);
// delete user.name;
// console.log(users);

//Đối tượng bất biến
// const user = Object.freeze({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// });
// const newUser = { ...user, age: 33 };
// const newUser = Object.assign({}, user, { age: 33 });
// user.age = 33;
// console.log(newUser);

//Destructuring: Phá vỡ cấu trúc object, array để truy cập vào các phần tử của nó. Sau đó lưu trữ thành các biến riêng biệt
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 33,
//   address: "Hà Nội",
//   position: "Teacher",
// };
// const name = user.name;
// const email = user.email;
// const { name: fullname, email, age = 20 } = user;
// console.log(fullname, email, age);

// const { name, email, ...rest } = user;
// console.log(rest);

// const users = ["Hoàng An", "hoangan.web@gmail.com", 33, "Hà Nội"];
// const [fullname, email, , address] = users;
// console.log(fullname, email);
// console.log(address);
// const [fullname, ...rest] = users;
// console.log(fullname);
// console.log(rest);

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//DOM = Document Object Model
