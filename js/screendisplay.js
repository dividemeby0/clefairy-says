var disappearSequenceTimeout = 2000;

function displaySequence(goBackToMain) {
  boardContent.innerHTML = `<h1>Try to memorize the instructions!</h1>`
  setTimeout(() => {
    boardContent.innerHTML = "";
  }, 1500);
  setTimeout(() => {
    for (let i=0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case "up":
          boardContent.innerHTML += '<img class="arrow" src="./img/arrow-icons/up-arrow.svg">';
        break;
        case "down":
          boardContent.innerHTML += '<img class="arrow" src="./img/arrow-icons/down-arrow.svg">';
        break;
        case "right":
          boardContent.innerHTML += '<img class="arrow" src="./img/arrow-icons/right-arrow.svg">';
        break;
        case "left":
          boardContent.innerHTML += '<img class="arrow" src="./img/arrow-icons/left-arrow.svg">';
        break;
      }
    }
    disappearSequence(function() {
      goBackToMain();
    });
  }, 1700);
}

function disappearSequence(goBackToDisplaySeq) {
  setTimeout(() => {
    boardContent.innerHTML = `<h1 style="text-align:center; font-size:70px">Go!<h1>`;
    goBackToDisplaySeq();
  }, disappearSequenceTimeout);
}

function scoreDisplay() {
  boardContent.innerHTML = "";
  if (newGame.playerScore > 1 && newGame2.playerScore > 1) {
    boardContent.innerHTML += `<h1>Player 1 has ${newGame.playerScore} lives remaining</h1><h1>Player 2 has ${newGame2.playerScore} lives remaining</h1>`;
  } else if (newGame.playerScore === 1 && newGame2.playerScore > 1) {
    boardContent.innerHTML += `<h1>Player 1 has ${newGame.playerScore} life remaining</h1><h1>Player 2 has ${newGame2.playerScore} lives remaining</h1>`;
  } else if (newGame.playerScore > 1 && newGame2.playerScore === 1) {
    boardContent.innerHTML += `<h1>Player 1 has ${newGame.playerScore} lives remaining</h1><h1>Player 2 has ${newGame2.playerScore} life remaining</h1>`;
  } else if (newGame.playerScore === 1 && newGame2.playerScore === 1) {
    boardContent.innerHTML += `<h1>Player 1 has ${newGame.playerScore} life remaining</h1><h1>Player 2 has ${newGame2.playerScore} life remaining</h1>`;
  } else if (newGame.playerScore === 0 && newGame2.playerScore > 0) {
    boardContent.innerHTML += `<h1>Player 1 has lost!</h1><h1>Player 2, you're the winner!</h1>`;
  } else if (newGame.playerScore > 0 && newGame2.playerScore === 0) {
    boardContent.innerHTML += `<h1>Player 2 has lost!</h1><h1>Player 1, you're the winner!</h1>`;
  } else if (newGame.playerScore === 0 && newGame2.playerScore === 0) {
    boardContent.innerHTML += `<h1>You both lost!</h1><h1>Clefairy thinks you're both losers...</h1>`;
  };
}

function gameOver() {
  setTimeout(() => {
    boardContent.innerHTML = `<h1 style="text-align:center; font-size:50px">Play again?<h1><h1>Press space bar to start new game</h1>`;
    document.addEventListener("keydown", function(event) {
      if (event.key == " ") {
        playAgain();
        console.log(`Here's the new sequence: ${instructions}`);
      };
    });
  }, 2500);
}