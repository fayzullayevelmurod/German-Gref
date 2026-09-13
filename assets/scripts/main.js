
const burger = document.querySelector(".burger");
const headerLink = document.querySelector(".header_link");
const headerBtn = document.querySelector(".header_btn");

if (burger && headerLink && headerBtn) {
  burger.addEventListener("click", () => {
    headerLink.classList.toggle("active");
    headerBtn.classList.toggle("active");
  });
}
