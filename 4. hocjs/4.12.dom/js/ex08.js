//clone node
// const app = document.querySelector("#app");
// const btn = document.querySelector("button");
// const h2 = document.querySelector("h2");
// btn.addEventListener("click", () => {
//   //   const content = app.innerHTML;
//   //   app.innerHTML += content;
//   const h2Clone = h2.cloneNode(true);
//   app.append(h2Clone);
// });

const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("down")) {
    // console.log("down");
    //Lấy li tương ứng
    //insert vào sau phần tử kế tiếp (Item 2: Insert sau Item 3)
    // const curItem = e.target.parentElement;
    // const nextItem = curItem.nextElementSibling;
    // if (!nextItem) {
    //   return;
    // }
    // const nextnextItem = nextItem.nextElementSibling;
    // const root = curItem.parentElement;
    // root.insertBefore(curItem, nextnextItem);

    //Anh An
    const li = e.target.parentElement;
    const nextElement = li.nextElementSibling;
    if (!nextElement) {
      return;
    }
    ul.insertBefore(nextElement, li);
  }

  if (e.target.classList.contains("up")) {
    // const curItem = e.target.parentElement;
    // const prevItem = curItem.previousElementSibling;
    // if (!prevItem) {
    //   return;
    // }
    // const root = curItem.parentElement;
    // root.insertBefore(curItem, prevItem);
    //Anh An
    const li = e.target.parentElement;
    const prevElement = li.previousElementSibling;
    if (!prevElement) {
      return;
    }
    ul.insertBefore(li, prevElement);
  }

  if (e.target.nodeName === "LI") {
    e.stopPropagation();
    removeSelected();
    e.target.classList.add("selected");
    const item = e.target;
    document.onkeyup = (e) => {
      handleDuplicate(e, item);
    };
  }
});
const removeSelected = () => {
  const itemSelected = document.querySelector("ul li.selected");
  if (itemSelected) {
    itemSelected.classList.remove("selected");
  }
};
const handleDuplicate = (e, item) => {
  if (e.altKey && e.shiftKey) {
    if (e.key === "ArrowDown") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      const nextElement = item.nextElementSibling;
      if (nextElement) {
        ul.insertBefore(itemClone, nextElement);
      } else {
        ul.append(itemClone);
      }
    }
    if (e.key === "ArrowUp") {
      const itemClone = item.cloneNode(true);
      itemClone.classList.remove("selected");
      ul.insertBefore(itemClone, item);
    }
  }
};
document.addEventListener("click", removeSelected);
//alt + shift + arrow down
//cloneNode
//insertBefore

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  //   alert(1);
  console.log(e.clientX, e.clientY);
});
