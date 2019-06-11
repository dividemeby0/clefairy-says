(function () {
  "use strict"

  var instructions = ["up", "up", "down", "down", "left", "right"];
  let boardContent = document.querySelector(".screen");

  const newGame = new GameInput(instructions);

  function listenKeys() {
    let allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    window.addEventListener("keydown", (evt) => {
      if (allowedKeys.includes(evt.key) && newGame.inputArray.length < instructions.length) {
        let direction = evt.key.split("Arrow").pop().toLocaleLowerCase();
        newGame.newInputArray(direction);
      };
    });
  }

  function displaySequence() {
    for (let i=0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case "up":
          boardContent.innerHTML += '<img class="arrow" src="/img/arrow-icons/up-arrow.svg">';
        break;
        case "down":
          boardContent.innerHTML += '<img class="arrow" src="/img/arrow-icons/down-arrow.svg">';
        break;
        case "right":
          boardContent.innerHTML += '<img class="arrow" src="/img/arrow-icons/right-arrow.svg">';
        break;
        case "left":
          boardContent.innerHTML += '<img class="arrow" src="/img/arrow-icons/left-arrow.svg">';
        break;
      }
    }
  }

  turnInitiate ()

  // press of a button -> Listen up! -> then display sequence, then sequence disappears.
  function turnInitiate() {
    listenUp();
    displaySequence();
    disappearSequence();  
  }

  function disappearSequence() {
    setTimeout(() => {
      boardContent.innerHTML = "";
    },10000);
  }

  function listenUp() {
    boardContent.innerHTML = `<h1>Try to memorize the instructions!</h1>`
    setTimeout(() => {
      boardContent.innerHTML = "";
    }, 3000);
  }

  window.addEventListener("DOMContentLoaded", listenKeys);

}());

