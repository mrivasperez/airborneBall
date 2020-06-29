var block = document.getElementById("block"),
  hole = document.getElementById("hole"),
  character = document.getElementById("character"),
  jumping = 0;

hole.addEventListener("animationiteration", () => {
  const random = -(Math.random() * 300 + 150);
  hole.style.top = `${random}px`;
});

// gravity
setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  if (jumping === 0) {
    character.style.top = `${characterTop + 3}px`;
  }
}, 10);

// jumping

const jump = (e) => {
  jumping = 1;
  let jumpCount = 0;
  const jumpIntervel = setInterval(() => {
    jumpCount++;
    character.style.top = `${characterTop - 5}px`;
    if (jumpCount > 20) {
      clearInterval(jumpIntervel);
    }
  }, 10);
};
