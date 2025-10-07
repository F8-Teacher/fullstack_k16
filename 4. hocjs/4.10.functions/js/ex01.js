//Function:
// Được dùng để gom các chương trình con lại, khi nào cần thì gọi ra
// Được thể hiện là 1 hành động
// Khi đặt tên hàm, dùng động từ
// Quy tắc camelCase
//Ví dụ: createProduct, setMessage, makeMenu,...
// Tiền tố động từ: create, set, get, make, build, print, handle, update, delete, remove, destroy...

/*
Cú pháp: 
1. Định nghĩa hàm (declaration function)
function tenHam(thamso1, thamso2,...) {
    Nội dung hàm
}
Lưu ý: Tham số là không bắt buộc    

2. Gọi hàm
tenHam(doiso1, doiso2,...) --> Lời gọi hàm chủ động

Hàm có giá trị trả về: Hàm trả về giá trị khác undefined

Hàm không có giá trị trả về: Hàm trả về giá trị undefined (Không return, return)

Khi từ khóa return được gọi --> Hàm sẽ thoát
*/

// function getMessage(msg, status = "success") {
//   console.log("Xin chào F8");
//   console.log(msg);
//   console.log(status);
// }

// getMessage("Js", "error");

// function getTotal(a, b) {
//   const total = a + b;
//   return total;
//   console.log("Ahihi");
// }
// const result = getTotal(10, 20);
// console.log(result);

//Ví dụ: Viết hàm trả về số chẵn đầu tiên trong mảng
// function getEven(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       return arr[i];
//     }
//   }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = getEven(numbers);
// console.log(result);

//Ví dụ: Dùng return để hạn chế else
// function division(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return false;
// }
// console.log(division(10, 0));

//Expression Function (Hàm biểu thức)
//Cú pháp:
/*
const tenbien = function() {
    Nội dung hàm
}
*/
// function doSomething() {
//   console.log("Chào F8");
// }
// function doSomething() {
//   console.log("Chào F9");
// }
// doSomething();

// const doSomething = function () {
//   console.log("Chào F8");
// };

// if (typeof doSomething === "function") {
//   doSomething();
// }

// const getMessage = "A";

// if (typeof getMessage === "function") {
//   getMessage();
// }

//Callback Function: Truyền 1 hàm vào 1 hàm khác thông qua tham số
// const display = function (callback) {
//   //   console.log(a);
//   if (typeof callback === "function") {
//     callback();
//   }
// };
// // const handler = function () {
// //   console.log("Xin chào F8");
// // };
// // display(handler);
// display(function () {
//   console.log("Học js không khó");
// });

//setTimeout(callback, timeout): Delay 1 hàm
// setTimeout(function () {
//   console.log("Demo setTimeout");
// }, 2000);

//setInterval(callback, timeout): Chạy lặp đi lặp 1 hàm sau 1 khoảng thời gian
// let count = 0;
// const id = setInterval(function () {
//   console.log("Demo setInterval:", ++count);
//   if (count === 5) {
//     clearInterval(id);
//   }
// }, 2000);

//clearTimeout(idTimeout) --> Hủy bỏ hàm setTimeout
//clearInterval(idTimeout) --> Hủy bỏ hàm setInterval

//Tham số còn lại (Rest parameter)
// - Phải viết cuối cùng
// - Gom tất cả đối số còn lại vào 1 mảng
// const doSomething = function (a, b, c, ...args) {
//   console.log(a, b, c);
//   console.log(args);
// };
// doSomething(10, 20, 30, 40, 50, 60);

// const doSomething = function (...args) {
//   console.log(args);
// };
// doSomething(10, 20, 30, 40, 50, 60);

// const doSomething = function (a, b, c) {
//   console.log(a, b, c);
//   console.log(arguments);
// };
// doSomething(10, 20, 30, 40, 50, 60);

//Arrow function (ES6): Vẫn là Expression Function. Tuy nhiên cú pháp sẽ gọi gàng hơn
// const getMessage = (msg, status = "success") => {
//   console.log("Xin chào F8");
//   console.log(msg);
//   console.log(status);
// };
// getMessage("JS");

//Return arrow function
// const sum = (a, b) => {
//   //Logic
//   return a + b;
// };

// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

//Ví dụ áp dụng arrow function với array filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.filter((value) => value % 2 === 0);
// console.log(result);

//Tương lai:
// - Closure, Scope,
// - IIFE
// - Function Object

// const textarea = document.querySelector("textarea");
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   const value = textarea.value;
//   const func = new Function(`return ${value}`); //Function object
//   console.log(func());
// });

//Buổi sau:
// Ôn lại cú pháp phần hàm
// Tìm trước về Object
