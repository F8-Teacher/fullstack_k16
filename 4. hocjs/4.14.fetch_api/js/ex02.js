const BASE_URL = `https://dummyjson.com`;
const query = {};
const renderPosts = (posts) => {
  const postListEl = document.querySelector(".js-post-list");
  const html = posts
    .map(
      (post) => `<div class="border border-gray-400 p-3 mb-3">
          <h2 class="text-2xl font-medium mb-3">
            ${post.title}
          </h2>
          <p>
            ${post.body}
          </p>
          <div class="flex mt-2 justify-between items-center">
            <button
              class="js-view border border-gray-400 px-3 py-2 rounded-full cursor-pointer hover:bg-[green] hover:text-white"
            >
              Xem chi tiết
            </button>
            <div class="flex gap-2">
              <span class="cursor-pointer">Sửa</span>
              <span class="cursor-pointer text-red-600">Xóa</span>
            </div>
          </div>
        </div>`
    )
    .join("");
  postListEl.innerHTML = html;
  const viewBtnList = postListEl.querySelectorAll(".js-view");
  viewBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(() => ({
        modalTitle: "Chi tiết bài viết",
        modalContent: "Nội dung chi tiết",
      }));
    });
  });
};
const setLoading = (status = true) => {
  const loadingEl = document.querySelector(".js-loading");
  loadingEl.innerHTML = status
    ? `<span class="text-3xl block text-center">Loading...</span>`
    : "";
};
const renderError = (message) => {
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = `<span class="text-3xl block text-center text-red-600 underline">${message}</span>`;
};
const fetchPosts = async () => {
  try {
    //Add loading
    setLoading();
    let url = `${BASE_URL}/posts`;
    if (query.search) {
      url = `${BASE_URL}/posts/search?q=${query.search}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch /posts");
    }
    const { posts } = await response.json();
    renderPosts(posts);
  } catch {
    renderError(`Đã có lỗi khi tải dữ liệu`);
  } finally {
    //Remove loading
    setLoading(false);
  }
};

const debounce = (callback, timeout = 500) => {
  let timeoutId;
  return (...args) => {
    //rest parameter
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args); //spread
    }, timeout);
  };
};
const addSearchEvent = () => {
  const searchEl = document.querySelector(".js-search");
  searchEl.addEventListener(
    "input",
    debounce((e) => {
      const value = e.target.value;
      //Call api với keyword là value
      query.search = value;
      fetchPosts();
    })
  );
};
const openModal = (callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.remove("hidden");
  const option = callback();
  modalTitle.innerText = option.modalTitle;
  modalConent.innerHTML = option.modalContent;
};
const closeModal = () => {
  const modalEl = document.querySelector(".js-modal");
  const modalTitle = modalEl.querySelector(".js-modal-title");
  const modalConent = modalEl.querySelector(".js-modal-content");
  modalEl.classList.add("hidden");
  modalTitle.innerText = "";
  modalConent.innerText = "";
};

const addEventCloseModal = () => {
  const overlay = document.querySelector(".js-overlay");
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });
};
addEventCloseModal();

fetchPosts();
addSearchEvent();
// openModal(() => {
//   return {
//     modalTitle: "Thêm mới bài viết",
//     modalContent: `<p>Xin chào anh em</p>`,
//   };
// });
