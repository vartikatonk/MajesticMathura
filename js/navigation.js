const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
const headerBottom = document.querySelector(".header-bottom");
const stickyOffset = headerBottom.offsetTop;

document.addEventListener("scroll", (e) => {
  if (window.scrollY >= stickyOffset) {
    headerBottom.classList.add("fixed");
    scrollToTopBtn.classList.add("show");
  } else {
    headerBottom.classList.remove("fixed");
    scrollToTopBtn.classList.remove("show");
  }
});
