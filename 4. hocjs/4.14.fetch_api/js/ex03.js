//Upload file

//Post Request
// --> Body
// --> Header: Content-Type
// + application/json --> Dạng json
// + application/x-www-form-urlencoded --> Dạng urlencode
// + multipart/form-data --> Gửi cả file và text
const BASE_URL = `https://api.escuelajs.co/api/v1`;
const imageEl = document.querySelector("#image");
const btn = document.querySelector("button");
const previewEl = document.querySelector(".preview");
let previewUrl;
imageEl.addEventListener("change", (e) => {
  const file = e.target.files[0];
  //Xóa ảnh cũ trong blob
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }
  previewUrl = URL.createObjectURL(file);
  const img = document.createElement("img");
  img.src = previewUrl;
  Object.assign(img.style, {
    width: `300px`,
    borderRadius: "10px",
  });
  previewEl.innerText = "";
  previewEl.append(img);
});

btn.addEventListener("click", async () => {
  const file = imageEl.files[0];
  if (!file) {
    return alert("Vui lòng chọn file");
  }
  const formData = new FormData();
  formData.append("file", file);
  try {
    btn.innerText = `Uploading...`;
    btn.disabled = true;
    const response = await fetch(`${BASE_URL}/files/upload`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    previewEl.append(data.location);
  } catch {
    alert("Đã có lỗi khi tải ảnh");
  } finally {
    btn.innerText = `Upload`;
    btn.disabled = false;
  }
});
