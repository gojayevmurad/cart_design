const cart = document.querySelector("figure");
cart.addEventListener("mousemove", mouseMoveEvent);
cart.addEventListener("mouseleave", mouseLeaveEvent);

function mouseMoveEvent(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const cartRect = cart.getBoundingClientRect();

  const rotateX = -10 + ((mouseY - cartRect.top) / cartRect.height) * 20;
  const rotateY = -10 + ((mouseX - cartRect.left) / cartRect.width) * 20;

  cart.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${-rotateY}deg) scale3d(1, 1, 1)`;
}

function mouseLeaveEvent(event) {
  cart.style.transform = `perspective(300px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
}
