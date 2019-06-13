"use strict"

var level = 4;
var instructions = generateNewSeq();

var waitBetweenTurn = true;
var boardContent = document.querySelector(".screen");
var turnResponseCount = 0;

var newGame = new GameInput(instructions);
var newGame2 = new GameInput(instructions);

// Turn : 1) Input 2) Compare arrays Once everyone has input a sequence :
// 3) Did you lose any points? 4) Update score bar 5) Put scores on screen
// 6) Loop the fuck back!!!

function initGame() {
  waitBetweenTurn = false;
}

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
    level += 1;
    disappearSequenceTimeout += 500;
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

function playAgain() {
  level = 4;
  instructions = generateNewSeq();
  newGame = new GameInput(instructions);
  newGame2 = new GameInput(instructions);
  updateScoreOne();
  updateScoreTwo();
  waitBetweenTurn = true;
  turnResponseCount = 0;
}