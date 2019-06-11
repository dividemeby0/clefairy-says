"use strict"

var instructions = ["up", "up", "down", "down", "left", "right"];
let boardContent = document.querySelector(".screen");

const newGame = new GameInput(instructions);
const newGame2 = new GameInput(instructions);

function listenKeysPlayerOne() {
    let allowedKeys = ["z", "d", "s", "q"];
    window.addEventListener("keydown", (evt) => {
      let direction;
      if (allowedKeys.includes(evt.key) && newGame.inputArray.length < instructions.length) {
        switch (evt.key) {
          case "z":
            direction = "up";
          break;
          case "d":
            direction = "right";
          break;
          case "s":
            direction = "down";
          break;
          case "q":
            direction = "left";
          break;
        };
        newGame.newInputArray(direction);
      };
    });
}

function listenKeysPlayerTwo() {
    let allowedKeys2 = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    window.addEventListener("keydown", (evt) => {
      if (allowedKeys2.includes(evt.key) && newGame2.inputArray.length < instructions.length) {
        let direction2 = evt.key.split("Arrow").pop().toLocaleLowerCase();
        newGame2.newInputArray(direction2);
      };
    });
}

window.addEventListener("DOMContentLoaded", function() {
  displaySequence(function() {
    listenKeysPlayerOne();
    listenKeysPlayerTwo();
  });
});

// Turn : 1) Input 2) Compare arrays 3) Did you lose any points? 4) Update score bar
// newGame.compareArrays();
// newGame.pointloss();
// updateScoreOne();

// newGame2.compareArrays();
// newGame2.pointloss();
// updateScoreTwo();

function updateScoreOne() {
  let scorebar = document.querySelector("#player1-score");
  if (newGame.playerScore == 3) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame.playerScore == 2) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame.playerScore == 1) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame.playerScore == 0) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">`;
  };
}

function updateScoreTwo() {
  let scorebar = document.querySelector("#player2-score");
  if (newGame2.playerScore == 3) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame2.playerScore == 2) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame2.playerScore == 1) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame2.playerScore == 0) {
    scorebar.innerHTML = `<img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="/img/sprite_sheetclefairysays_ballopen.png" alt="">`;
  };
}
