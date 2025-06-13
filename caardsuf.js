let isAnimating = false;

function popCard(card) {
  card.classList.remove("pop"); // reset animation
  void card.offsetWidth; // trigger reflow
  card.classList.add("pop"); // reapply pop
}
function rotateLeft() {
  if (isAnimating) return;
  isAnimating = true;

  const stack = document.getElementById("cardStack");
  const topCard = stack.children[0];

  topCard.classList.add("exit-left");

  setTimeout(() => {
    stack.appendChild(topCard);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        topCard.classList.remove("exit-left");
        updateStack();
        popCard(stack.children[0]);
        setTimeout(() => {
          isAnimating = false;
        }, 500);
      });
    });
  }, 500); // Wait for the exit animation
}

function rotateRight() {
  if (isAnimating) return;
  isAnimating = true;

  const stack = document.getElementById("cardStack");
  const bottomCard = stack.children[stack.children.length - 1];

  bottomCard.classList.add("exit-right");
  stack.insertBefore(bottomCard, stack.children[0]);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      updateStack();
      bottomCard.classList.remove("exit-right");
      popCard(stack.children[0]);
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    });
  });
}

function updateStack() {
  const cards = document.querySelectorAll(".card");
  const angles = [0, -8, 0, 0];

  cards.forEach((card, i) => {
    card.style.zIndex = cards.length - i;
    card.style.transform = `
      translateY(${i * 15}px)
      scale(${1 - i * 0.07})
      rotate(${angles[i % angles.length]}deg)
    `;
    card.style.opacity = 1;
  });
}

// Initialize
updateStack();
popCard(document.getElementById("cardStack").children[0]);
