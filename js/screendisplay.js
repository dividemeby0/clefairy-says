const disappearSequenceTimeout = 500;

function displaySequence(goBackToMain) {
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
  disappearSequence(function() {
    console.log("yataaaaa");
    goBackToMain();
  });
}

function updatePlayersLife() {

}

function displayTurnResult() {

}

function disappearSequence(goBackToDisplaySeq) {
  setTimeout(() => {
    boardContent.innerHTML = "";
    goBackToDisplaySeq();
  }, disappearSequenceTimeout);
}

  // function listenUp() {
  //   boardContent.innerHTML = `<h1>Try to memorize the instructions!</h1>`
  //   setTimeout(() => {
  //     boardContent.innerHTML = "";
  //   }, 3000);
  // }

  // press of a button -> Listen up! -> then display sequence, then sequence disappears.
// function turnInitiate() {
//   // listenUp();
//   displaySequence();
//   disappearSequence();  
// }


