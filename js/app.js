window.addEventListener("load", loadHandler);

function loadHandler() {
  const container = document.querySelector(".wrapper");
  const duck = document.querySelector(".duck");
  const counter = document.querySelector(".counter");
  const gameOver = document.querySelector(".game-over");
  const userScreen = container.getBoundingClientRect();

  container.addEventListener("click", shotTheDuck);

  setInterval(duckFly, 2000);

  function duckFly() {
    duck.style.top = getRandomCoords(1, userScreen.height - 100) + "px";
    duck.style.left = getRandomCoords(1, userScreen.width - 100) + "px";
  }

  function shotTheDuck(e) {
    const duck = e.target.parentElement;
    if (duck.classList.contains("duck")) {
      counter.innerHTML = +counter.innerHTML + 1;
    } else if (e.target.classList.contains("visible")) {
      gameOver.classList.remove("visible");
    } else {
      gameOver.classList.add("visible");
      counter.innerHTML = 0;
    }
  }

  function getRandomCoords(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
