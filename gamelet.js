const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let vertTop = 0;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
  }
  if (position < 0) {
    position = 0;
    vertTop += 10;
    ball.style.top = vertTop + "px";
  }
  if (position > 800) {
    position = 800;
    vertTop -= 10;
    ball.style.top = vertTop + "px";
  }
  refresh();
  console.log("position: " + position);
}

function refresh() {
  ball.style.left = position + "px";
}
