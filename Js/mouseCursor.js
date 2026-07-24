'use strict';

const newCursor = document.querySelector('.cursor-container');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  newCursor.style.left = currentX + "px";
  newCursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

// hover on links and ...
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseover", () => {
    newCursor.classList.add("active");
  });

  el.addEventListener("mouseout", () => {
    newCursor.classList.remove("active");
  });
});