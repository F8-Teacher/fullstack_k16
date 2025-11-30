//Storage: Bộ nhớ lưu trữ ở phía trình duyệt
// => Chỉ lưu trữ text

//localStorage, sessionStorage
// - Phân biệt thông qua origin = scheme + hostname + port
// - Dung lượng lưu trữ khoảng 4-5mb
// - Server không đọc được
// - Dễ bị tấn công XSS

//Tạo script.js --> Deploy https://f8.edu.vn/js/script.js
//localStorage.getItem('token') --> save file .txt

//localStorage.getItem('key')
//localStorage.seItem('key', 'value')
//localStorage.removeItem('key')
//localStorage.clear()

//sessionlStorage.getItem('key')
//sessionlStorage.seItem('key', 'value')
//sessionlStorage.removeItem('key')
//sessionlStorage.clear()

//localStorage: Lưu trữ vĩnh viễn
//sessiobStorage: Lưu trữ theo phiên

// if (typeof Storage !== "undefined") {
//   console.log("Cho phép");
// }

// const data = {
//   id: 1,
//   name: "User 1",
// };
// localStorage.setItem("user", JSON.stringify(data));

// const user = JSON.parse(localStorage.getItem("user") || "{}");
// console.log(user);

//Cookie: Mẩu tin được truyền qua lại giữa client và server
// - Dung lượng lưu trữ thấp: Khoảng 4-5kb
// - Phân biệt theo path (Sau port)
// - Cho phép đánh httponly để tránh xss (Chỉ server mới lấy được cookie)
// - Cookie sẽ tự động đính kèm vào request header
// - Cookie chia sẻ tới các subdomain

//1. client set cookie
// const expires = new Date("2025-11-14 09:08:30").toUTCString();

// document.cookie = "token=123;path=/;expires=" + expires;
// document.cookie = "refresh=456;path=/;expires=" + expires;

// document.cookie = "name=an;secure;httponly";

// document.cookie = `token=123;path=/;expires=${new Date().toUTCString()}`;

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   credentials: "same-origin",
// });

//2. server set cookie
// Server trả về Response Header có tên: Set-Cookie
// Set-Cookie: token=123;path=/;max-age=600;Secure;HttpOnly

console.log(document.cookie);
