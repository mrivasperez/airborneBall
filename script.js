var block = document.getElementById("block"),
  hole = document.getElementById("hole"),
  character = document.getElementById("character"),
  var jumping = 0;

hole.addEventListener("animationiteration", () => {
  const random = -(Math.random() * 300 + 150);
  hole.style.top = `${random}px`;
});

// gravity
setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  
  character.style.top = `${characterTop + 3}px`;
});

// jumping

const jump = (e) => {
    jumping = 1;
} 
