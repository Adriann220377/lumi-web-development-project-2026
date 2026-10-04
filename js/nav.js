// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("solid");
  } else {
    nav.classList.remove("solid");
  }
});

// MOBILE MENU OPEN/CLOSE
const ham = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Open menu + animate hamburger
ham.addEventListener("click", () => {
  menu.classList.add("open");
  ham.classList.add("active");
});

// Close menu with X + reset hamburger
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
  ham.classList.remove("active");
});

// Close menu when clicking any link + reset hamburger
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    ham.classList.remove("active");
  });
});
