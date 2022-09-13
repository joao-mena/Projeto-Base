export function header() {
  const navbarMenu = document.getElementById("menu");
  const burgerMenu = document.getElementById("burger");
  const overlayMenu = document.querySelector(".overlay");
  const switcher = document.querySelector(".switch");

  // Toggle of Navbar Menu on Click
  if (burgerMenu && overlayMenu) {
    burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      overlayMenu.classList.add("is-active");
    });

    overlayMenu.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      overlayMenu.classList.remove("is-active");
    });
  }

  // Close Navbar Menu on Click Links
  document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
    });
  });

  // Dark and Light Mode on Switch Click
  document.addEventListener("DOMContentLoaded", () => {
    const darkSwitch = document.getElementById("switch");

    darkSwitch.addEventListener("click", () => {
      document.body.classList.toggle("darkmode");
      switcher.classList.toggle("darkmode");
    });
  });

  // Fixed Navbar Menu on Window Resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      if (navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.remove("is-active");
        overlayMenu.classList.remove("is-active");
      }
    }
  });
}
