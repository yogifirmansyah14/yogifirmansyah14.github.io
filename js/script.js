// Scroll Reveal
ScrollReveal({
  reset: true,
  duration: 500,
  delay: 450,
  origin: "bottom",
});

ScrollReveal().reveal(".hero");
ScrollReveal().reveal(".about");
ScrollReveal().reveal(".menu");
ScrollReveal().reveal(".contact");

// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu diclick
document.querySelector("#menu-toggle").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu-toggle");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
