const mobileMenuBtn = document.querySelector(".js-mobile-menu");
const sideBar = document.querySelector(".js-sidebar");
const closeMenuBtn = document.querySelector(".js-close-menu");
const navLinks = document.querySelector(".nav-links");

let isActive = false;

if (isActive) {
}

mobileMenuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  isActive = true;
});

closeMenuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  isActive = false;
});
