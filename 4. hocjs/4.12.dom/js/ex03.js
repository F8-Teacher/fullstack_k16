//classList
// const contentEl = document.querySelector(".content");

// console.log(contentEl.classList);

//1. Thêm class --> add()
// contentEl.classList.add("block-1", "block-2");

//2. Thay thế class --> replace
// contentEl.classList.replace("block-1", "content-1");

//3. Xóa class
// contentEl.classList.remove("block-2");

//4. Toggle
// - Nếu chưa có class --> Thêm mới
// - Nếu có class --> Xóa
// contentEl.classList.toggle("active");
// contentEl.classList.toggle("active");

//5. contains(class) --> Trả về true nếu class tồn tại

// const allItems = document.querySelectorAll("ul li");
// // console.log(allItems);

// allItems.forEach((item) => {
//   const btn = item.querySelector("button");
//   //   const span = item.querySelector("span");
//   btn.addEventListener("click", () => {
//     //Xác định item nào đang active
//     const itemActive = document.querySelector("ul li.active");

//     item.classList.toggle("active");

//     if (itemActive) {
//       itemActive.classList.remove("active");
//       const btnActive = itemActive.querySelector("button");
//       btnActive.innerText = "show";
//     }

//     if (item.classList.contains("active")) {
//       //Đang mở
//       btn.innerText = "hide";
//     } else {
//       //Đang đóng
//       btn.innerText = "show";
//     }
//   });
// });

//DOM CSS
// const contentEl = document.querySelector(".content");
// console.log(contentEl.style);
// contentEl.style.backgroundColor = `yellow`;
// contentEl.style.color = "red";
// contentEl.style.fontStyle = "italic";

// Object.assign(contentEl.style, {
//   backgroundColor: "yellow",
//   fontStyle: "italic",
// });

// contentEl.style.color = null;

//Event object
//- clientX, clientY
//- offsetX, offsetY
//- key --> Áp dụng ở sự kiện keyup, keydown
// const btn = document.querySelector("button");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// const input = document.querySelector("input");
// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
// });

//preventDefault(): Ngăn chặn hành động mặc định của thẻ html

// const aEl = document.querySelector("a");
// aEl.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.href);
// });

// const formEl = document.querySelector("form");
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("submit");
// });
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   alert("Không được chuột phải");
// });

//stopPropagation() --> Ngăn nổi bọt sự kiện từ thẻ html con
const boxEl = document.querySelector(".box");
const btnEl = document.querySelector("button");
boxEl.addEventListener("click", () => {
  console.log("box clicked");
});
btnEl.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("button clicked");
});
