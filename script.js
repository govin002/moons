
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// section scroll and menu
window.addEventListener("DOMContentLoaded", () => {
  const heroImage = document.getElementById("heroImage");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const menuLinks = document.querySelectorAll(".menu-list a");

  // Lock scroll initially
  document.body.classList.add("no-scroll");

  // Begin transition after delay
  setTimeout(() => {
    document.body.classList.add("transitioned");

    const unlockScroll = () => {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "auto";
    };

    // Remove scroll lock after transition
    if (heroImage) {
      heroImage.addEventListener("transitionend", unlockScroll, { once: true });
      // Fallback in case transitionend doesn't fire
      setTimeout(unlockScroll, 1500);
    } else {
      unlockScroll();
    }
  }, 2000);

  // Mobile Menu: Open
  const showMenu = () => {
    mobileMenu.style.display = "flex";
    document.body.classList.add("no-scroll");
  };

  // Mobile Menu: Close
  const hideMenu = () => {
    mobileMenu.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  menuToggle?.addEventListener("click", showMenu);
  closeMenu?.addEventListener("click", hideMenu);
  menuLinks.forEach((link) => link.addEventListener("click", hideMenu));
});
