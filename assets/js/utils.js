function toggleToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// this sets are for the navigation
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
});
