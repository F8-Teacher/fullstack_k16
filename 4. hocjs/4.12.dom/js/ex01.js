/*
<html>
    <head>
        <title>Tiêu đề</title>
    </head>
    <body>
        <h1 id="ahihi">
            F8
        </h1>
    </body>
</html>
*/
// const myObj = {
//   html: {
//     head: {
//       title: "Tiêu đề",
//     },
//     body: {
//       h1: {
//         id: "ahihi",
//         text: "F8",
//       },
//     },
//   },
// };
// console.log(myObj);

//Cần học gì?
// - Học cách sử dụng và thay đổi các key trong DOM Object
// - Học cách sử dụng các phương thức có sẵn để thay đổi DOM Object

//Truy cập vào phần tử html trong DOM

//TH1: Truy cập vào các phần tử đặc biệt
// console.log(document.title);
// document.title = "Ok rồi";

// console.log(document.body);
// console.log(document.body.innerHTML);
// document.body.innerHTML = "<h1>F8 - Học lập trình</h1>";

//TH2: Truy cập vào các phần tử thông thường
//1. Truy cập thông qua id của thẻ html
// const titleEl = document.getElementById("title");
// console.log(titleEl);

//2. Truy cập thông qua class của thẻ html
// => Trả về 1 danh sách
// const titleList = document.getElementsByClassName("sub-title");
// console.log(titleList);

//3. Truy cập thông qua tagname của thẻ html
// const titleList = document.getElementsByTagName("h2");
// console.log(titleList);

//4. Truy cập phần tử đầu thông qua css selector
// const titleEl = document.querySelector(".box .sub-title");
// console.log(titleEl);

//5. Truy cập tất cả phần tử thông qua css selector
// const titleList = document.querySelectorAll(".box .sub-title");
// console.log(titleList);

//Event = Sự kiện
// - Hành động của người dùng tác động lên các thẻ html
// - JS hỗ trợ các sự kiện --> Chỉ việc dùng và viết logic cho nó

//Cách lắng nghe sự kiện
// - Xác định tên sự kiện
// - Xác định phần tử lắng nghe sự kiện
// - Logic xử lý sau đó

//Ví dụ:
// - Tên sự kiện: click
// - Phần tử: btn
// - Logic: log

//Cú pháp: tenphantu.on<tensukien> = function() {
//Logic
//}
// const btnEl = document.querySelector(".btn");
// btnEl.addEventListener("click", function (e) {
//   //   console.log(this);
//   //   console.log(e);
//   console.log("click 1");
// });
// btnEl.addEventListener("click", function (e) {
//   //   console.log(this);
//   //   console.log(e);
//   console.log("click 2");
// });
// btnEl.onclick = function (e) {
//   console.log("Clicked");
//   //this --> Element node đang tác động sự kiện (Trừ arrow function)
//   //e = event object --> Đối tượng chứa thông tin của sự kiện
//   //   console.log(this);
//   //   console.log(e.target);
// };
// btnEl.onclick = function () {
//   console.log("Clicked 2");
// };
// btnEl.ondblclick = function () {
//   console.log("Double click");
// };
// btnEl.onmouseover = function () {
//   console.log("Mouse over");
// };
// btnEl.onmouseout = function () {
//   console.log("Mouse out");
// };

//Danh sách các sự kiện hay dùng
// - click --> bấm vào phần tử
// - mousedown --> bấm chuột xuống
// - mouseup --> nhả chuột
// - mouseover --> Di chuột vào phần tử
// - mouseout --> Di chuột ra khỏi phần tử
// - mousemove --> Di chuột bên trong phần tử
// - keyup --> Nhả phím
// - keydown --> Nhấn phím
// - input --> Gõ ký tự trong form
// - submit --> Submit form
// - change --> Thay đổi giá trị của trường trong form
// - focus --> Focus vào trường trong form
// - blur --> Bỏ focus trường trong form
// - scroll --> Kéo thanh cuộn

//Thao tác với thẻ html
// const contentEl = document.querySelector(".content");

//1. Lấy toàn bộ nội dung bên trong của thẻ html
// console.log(contentEl.innerHTML);

//2. Cập nhật nội dung bên trong của thẻ html
// contentEl.innerHTML = `<h1><i>Ok chưa?</i></h1>`;

//3. Lấy nội dung (Không có html)
// console.log(contentEl.innerText);

//4. Cập nhật nội dung (Không có html)
// contentEl.innerText = `<h1><i>Ok chưa?</i></h1>`;

//5. Lấy nội dung (Không có html, giữ khoảng cách ban đầu)
// console.log(contentEl.textContent);

//6. Cập nhật nội dung (Không có html, giữ khoảng cách)
// contentEl.textContent = `<h1>

// <i>Ok chưa?</i>

// </h1>`;

//7. Lấy nội dung bên trong và chính nó của thẻ html
// console.log(contentEl.outerHTML);

//8. Cập nhật nội dung bên trong là chính nó
// contentEl.outerHTML = `<h1><i>Ok chưa?</i></h1>`;

//9. Xóa phần tử html
// contentEl.innerHTML = "";
// contentEl.remove();

//Thao tác với thuộc tính của thẻ html
//Cú pháp: tenphantu.tenthuoctinh
const imgEl = document.querySelector("img");
// console.log(imgEl.src);
// console.log(imgEl.id);
// console.log(imgEl.className);
// console.log(imgEl.width);
// console.log(imgEl.alt);
// console.log(imgEl.title);

// imgEl.src =
//   "https://fastly.picsum.photos/id/570/536/354.jpg?hmac=H3qOXniuMD7qN4Bg7wqzHYvgroygVxYNQ1xX6lyKGc8";

//Truy cập vào data-attribute
// console.log(imgEl.getAttribute("data-id"));
// imgEl.setAttribute("data-id", "123456");
// imgEl.setAttribute("data-animation", "fade-in");

// console.log(imgEl.dataset);
// console.log(imgEl.dataset.id); //data-id
// imgEl.dataset.animation = "fade-in"; //data-animation
// imgEl.dataset.animationTimingFunction = "linear"; //data-animation-timing-function
