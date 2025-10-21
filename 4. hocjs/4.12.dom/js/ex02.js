const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const errorEl = document.querySelector(".error");
const imageEl = document.querySelector(".image");
btnEl.addEventListener("click", () => {
  errorEl.innerText = "";
  imageEl.innerText = ""; //xóa nội dung bên trong thẻ div có class là image
  if (!inputEl.value.trim()) {
    errorEl.innerText = "Vui lòng nhập link ảnh";
    return;
  }
  //   imageEl.innerText = `<img src="${inputEl.value}" />`;
  //Tạo Element Node từ js --> Đưa cây DOM
  const img = document.createElement("img");
  img.src = inputEl.value; //Cập nhật thuộc tính cho node

  imageEl.append(img); //Thêm vào cuối của element

  inputEl.value = ""; //Xóa value trong input
});
