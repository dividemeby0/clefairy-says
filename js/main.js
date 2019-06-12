"use strict"

var level = 4;
var instructions = generateNewSeq();

var waitBetweenTurn = true;
var boardContent = document.querySelector(".screen");
var turnResponseCount = 0;

// variables à réinitialiser si nouvelle partie :
const newGame = new GameInput(instructions);
const newGame2 = new GameInput(instructions);

function listenKeysPlayerOne(evt) {
    let allowedKeys = ["z", "d", "s", "q"];
    if (waitBetweenTurn) return;
    // window.addEventListener("keydown", (evt) => {
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
        newGame.newInputArray(direction, updateScoreOne);
      };
    // });
}

function listenKeysPlayerTwo(evt) {
    let allowedKeys2 = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    if (waitBetweenTurn) return;
    // window.addEventListener("keydown", (evt) => {
      // console.log(evt);
      if (allowedKeys2.includes(evt.key) && newGame2.inputArray.length < instructions.length) {
        let direction2 = evt.key.split("Arrow").pop().toLocaleLowerCase();
        newGame2.newInputArray(direction2, updateScoreTwo);
      };
    // });
}

function initGame() {
  waitBetweenTurn = false;
}

window.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("keydown", (evt) => {
    listenKeysPlayerOne(evt);
    listenKeysPlayerTwo(evt);
    console.log(level);
  });
  window.addEventListener("keydown", function(event) {
      if (event.key == " ") {
        displaySequence(initGame);
      }
    }  
  ); 
});

function checkTurnResponseCount() {
  console.log("turn response count", turnResponseCount);
  if (turnResponseCount === 2) {
    console.log("both played")
    scoreDisplay();
    if (newGame.playerScore === 0 || newGame2.playerScore === 0) {
      gameOver();
    } else if (newGame.playerScore > 0 || newGame2.playerScore > 0) {
      nextTurn(initGame);
    }
  }
}

// Turn : 1) Input 2) Compare arrays Once everyone has input a sequence :
// 3) Did you lose any points? 4) Update score bar 5) Put scores on screen
// 6) Loop the fuck back!!!

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
  turnResponseCount++;
  checkTurnResponseCount()
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
  turnResponseCount++;
  checkTurnResponseCount()
}

function nextTurn(clbk) {
  turnResponseCount = 0;
  waitBetweenTurn = true;
  difficultyIncrease();
  instructions = generateNewSeq();
  newGame.setInstructions(instructions);
  newGame2.setInstructions(instructions);
  
  setTimeout(() => {
    boardContent.innerHTML = `<h1>Ready for a new set of instructions?</h1>`;
    setTimeout(() => {
      boardContent.innerHTML = "";
      displaySequence(clbk);
    }, 1500);
  }, 1500);

}

function difficultyIncrease() {
  if (level < 18) {
    level += 2;
  };
  console.log(level)
}

function generateNewSeq() {
  var newSeq = [];
  var dirArray = ["up", "down", "left", "right"];
  for (let i=1; i <= level; i++) {
    var randomDir = dirArray[Math.floor(Math.random() * dirArray.length)];
    newSeq.push(randomDir);
  }
  return(newSeq);
}

// function welcomeScreen() {

//   boardContent.innerHTML
// }