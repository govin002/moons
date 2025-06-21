// Initialize Lenis
const lenis = new Lenis();

// Define scroll update loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// Delay starting Lenis for 1 seconds  this will work for the initial scroll lock
setTimeout(() => {
  requestAnimationFrame(raf);
}, 3000);
