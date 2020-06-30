var block = document.getElementById("block"),
  hole = document.getElementById("hole"),
  character = document.getElementById("character"),
  jumping = 0,
  counter = 0;

hole.addEventListener("animationiteration", () => {
  var random = Math.random() * 3,
    top = -(random * 100 + 150);
  hole.style.top = `${top}px`;
});

// gravity
setInterval(() => {
  let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    ),
    blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    ),
    holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top")),
    cTop = -(500 - characterTop);

  if (jumping === 0) {
    character.style.top = `${characterTop + 3}px`;
  }

  if (
    characterTop > 480 ||
    (blockLeft < 20 && blockLeft > -50 && cTop < holeTop) ||
    cTop > holeTop + 130
  ) {
    alert(`Game over. Your score is ${counter}`);
    character.style.top = `${100}px`;
    counter = 0;
  }
  counter++;
}, 10);

// jumping

const jump = () => {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(() => {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );

    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = `${characterTop - 5}px`;
    }

    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }

    // if (){};

    jumpCount++;
  }, 10);
};
