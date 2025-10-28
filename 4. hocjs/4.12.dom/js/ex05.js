//DOM Navigation
// - parentElement: Chọn phần tử cha từ phần tử hiện tại (1 cấp)
// - children: Chọn danh sách phần tử con gần nhất từ phần tử đã có
// - nextElementSibling: Chọn phần tử kế tiếp từ phần tử đã có
// - previousElementSibling: Chọn phần tử phía trước từ phần tử đã có (Lùi lại)

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn.parentElement);
//   });
// });

// const ul = document.querySelector("ul");
// console.log(ul.children[1].children[0].innerText);

//Bấm vào nút next
// - Chọn phần tử kế tiếp của itemActive
// - Xóa bỏ class phần tử active cũ: classList.remove('active')
// - Thêm class vào phần tử kế tiếp: classList.add('active')
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
nextBtn.addEventListener("click", () => {
  const itemActive = document.querySelector(".products .active");
  const nextElement = itemActive.nextElementSibling;
  if (nextElement) {
    itemActive.classList.remove("active");
    nextElement.classList.add("active");
  } else {
    //Xóa class ở phần tử cuối
    itemActive.classList.remove("active");

    //Chọn phần tử và thêm class cho nó: .products h2:first-child
    const firstItem = document.querySelector(".products h2:first-child");
    firstItem.classList.add("active");
  }
});
prevBtn.addEventListener("click", () => {
  const itemActive = document.querySelector(".products .active");
  const prevElement = itemActive.previousElementSibling;
  if (prevElement) {
    itemActive.classList.remove("active");
    prevElement.classList.add("active");
  } else {
    itemActive.classList.remove("active");
    const lastItem = document.querySelector(".products h2:last-child");
    lastItem.classList.add("active");
  }
});
