function updateScoreOne() {
  let scorebar = document.querySelector("#player1-score");
  if (newGame.playerScore == 3) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame.playerScore == 2) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame.playerScore == 1) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame.playerScore == 0) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">`;
  };
  turnResponseCount++;
  checkTurnResponseCount()
}

function updateScoreTwo() {
  let scorebar = document.querySelector("#player2-score");
  if (newGame2.playerScore == 3) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame2.playerScore == 2) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame2.playerScore == 1) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballclosed.png" alt="">`;
  } else if (newGame2.playerScore == 0) {
    scorebar.innerHTML = `<img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">
    <img src="./img/sprite_sheetclefairysays_ballopen.png" alt="">`;
  };
  turnResponseCount++;
  checkTurnResponseCount()
}
