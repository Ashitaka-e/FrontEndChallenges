const navLinks = document.getElementById("navLinks");
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const main = document.querySelector(".main");

btnOpen.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
// main.addEventListener("click", closeMenu);

function toggleMenu() {
  navLinks.classList.toggle("active");
  const isOpen = navLinks.classList.contains("active");
  document.body.style.overflow = isOpen ? "hidden" : "visible";
  document.body.style.background = isOpen ? "rgba(0, 0, 0, 0.5)" : "transparent";
}

// function closeMenu() {
//   if (navLinks.classList.contains("active")) {
//     navLinks.classList.remove("active");
//     document.body.style.overflow = "visible";
//     document.body.style.background = "transparent";
//   }
// }