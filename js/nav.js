// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("solid");
  } else {
    nav.classList.remove("solid");
  }
});

// NAVBAR ACTIVE LINK UNDERLINE
const links = document.querySelectorAll('.nav-link');
const underline = document.createElement('div');
underline.classList.add('nav-underline');
document.querySelector('nav').appendChild(underline);

function updateUnderline() {
  const active = document.querySelector('.nav-link.active');
  if (!active) return;

  const rect = active.getBoundingClientRect();
  underline.style.width = rect.width + "px";
  underline.style.left = active.offsetLeft + "px";
}

links.forEach(link => {
  if (link.href.includes(location.pathname)) {
    link.classList.add('active');
  }
});

updateUnderline();
window.addEventListener('resize', updateUnderline);


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
