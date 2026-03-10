const parallaxItems = document.querySelectorAll("[data-speed]");

let latestScrollY = 0;
let ticking = false;

function updateParallax() {
  parallaxItems.forEach((item) => {
    const speed = parseFloat(item.dataset.speed) || 0;
    const y = latestScrollY * speed;
    item.style.transform = `translate3d(0, ${y}px, 0)`;
  });

  ticking = false;
}

function onScroll() {
  latestScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("load", updateParallax);
window.addEventListener("resize", updateParallax);