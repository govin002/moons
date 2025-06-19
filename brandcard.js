document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".brand-card");
  const descBox = document.getElementById("card-description");
  const descTitle = document.getElementById("desc-title");
  const descText = document.getElementById("desc-text");

  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-desc");
  const popupClose = document.getElementById("popup-close");

  // Show first card by default on desktop
  if (window.innerWidth >= 768 && cards.length > 0) {
    descTitle.textContent = cards[0].dataset.title;
    descText.textContent = cards[0].dataset.desc;
  }

  cards.forEach((card) => {
    // Desktop: hover to update description box
    card.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 768) {
        descTitle.textContent = card.dataset.title;
        descText.textContent = card.dataset.desc;
      }
    });

    // Mobile: simulate hover using touchstart
    card.addEventListener(
      "touchstart",
      (e) => {
        if (window.innerWidth < 768) {
          // Prevent double firing
          e.stopPropagation();

          popupTitle.textContent = card.dataset.title;
          popupDesc.textContent = card.dataset.desc;
          popup.style.display = "block";
        }
      },
      { passive: true }
    );
  });

  // Close popup on touch anywhere outside
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close popup if touched outside
  window.addEventListener("touchstart", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
