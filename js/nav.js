window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("solid");
  } else {
    nav.classList.remove("solid");
  }
});
const ham = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");

ham.addEventListener("click", () => {
  menu.classList.toggle("open");
});
