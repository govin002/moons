const cardStack = document.getElementById("cardStack");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let isAnimating = false;

function updateTilt() {
  const cards = Array.from(cardStack.children);
  cards.forEach((card, i) => {
    card.style.zIndex = 100 - i;
    card.style.transition = "transform 0.3s ease";
    card.style.transform = ""; // Reset inline transform so CSS tilt applies
  });
}

// Move bottom card to top (from left)
function moveBottomToTopLeft() {
  if (isAnimating) return;
  isAnimating = true;

  const cards = Array.from(cardStack.children);
  const bottomCard = cards[cards.length - 1];

  cardStack.removeChild(bottomCard);
  cardStack.insertBefore(bottomCard, cardStack.firstChild);

  gsap.fromTo(
    bottomCard,
    { x: -400 },
    {
      x: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        updateTilt();
        isAnimating = false;
      },
    }
  );
}

// Move bottom card to top (from right)
function moveBottomToTopRight() {
  if (isAnimating) return;
  isAnimating = true;

  const cards = Array.from(cardStack.children);
  const bottomCard = cards[cards.length - 1];

  cardStack.removeChild(bottomCard);
  cardStack.insertBefore(bottomCard, cardStack.firstChild);

  gsap.fromTo(
    bottomCard,
    { x: 400 },
    {
      x: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        updateTilt();
        isAnimating = false;
      },
    }
  );
}

leftBtn.addEventListener("click", moveBottomToTopLeft);
rightBtn.addEventListener("click", moveBottomToTopRight);

updateTilt();
