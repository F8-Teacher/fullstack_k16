const linkList = document.querySelectorAll(".menu > li > a");
linkList.forEach((linkEl) => {
  const liEl = linkEl.parentElement;
  const submenuEl = linkEl.nextElementSibling;
  if (submenuEl) {
    liEl.classList.add("has-children");
    linkEl.addEventListener("click", (e) => {
      e.preventDefault();
      const liActive = document.querySelector(".menu > li.active");
      liEl.classList.toggle("active");
      if (liActive) {
        liActive.classList.remove("active");
      }
    });
  }
});
