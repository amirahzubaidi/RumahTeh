//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika tigagaris menu di klik
document.querySelector("#tigagaris-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const tigagaris = document.querySelector("#tigagaris-menu");

document.addEventListener("click", function (e) {
  if (!tigagaris.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
