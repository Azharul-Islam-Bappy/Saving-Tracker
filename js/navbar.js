// navbar js 

const menuIcon = document.querySelector(".menu");
const menuContainer = document.querySelector(".menu-container");
const navbar = document.querySelector(".navbar-head");
const closeMenu = document.querySelector(".close");


menuIcon.addEventListener("click", () => {
  menuContainer.classList.remove("close-menu");
  menuContainer.classList.add("open");
  navbar.style.display = "none";
});
closeMenu.addEventListener("click", () => {
  menuContainer.classList.add("close-menu");
  menuContainer.classList.remove("open");
  navbar.style.display = "flex";
});