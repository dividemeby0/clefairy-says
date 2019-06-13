var playerAnimationInterval;
var playerSpriteSheet = document.getElementById("player1-sprite");
playerSpriteSheet.style.margin = "0px";
var player2SpriteSheet = document.getElementById("player2-sprite");
player2SpriteSheet.style.margin = "0px";
var widthOfPlayerSpriteSheet = 256;
var widthOfEachPlayerSprite = 64;

// function stopAnimation() {
//   clearInterval(playerAnimationInterval);
// }

function startPlayerAnimation() {
  let position = widthOfEachPlayerSprite;
  let speed = 600;
  let diff = widthOfEachPlayerSprite;
  playerAnimationInterval = setInterval(() => {
    playerSpriteSheet.style.backgroundPosition = `-${position}px 0px`;
    if (position < widthOfPlayerSpriteSheet) {
      position = position + diff;
    } else {
      position = widthOfEachPlayerSprite;
    }
  }, speed);
}

startPlayerAnimation();

function startPlayer2Animation() {
  let position = widthOfEachPlayerSprite;
  let speed = 600;
  let diff = widthOfEachPlayerSprite;
  playerAnimationInterval = setInterval(() => {
    player2SpriteSheet.style.backgroundPosition = `-${position}px 0px`;
    if (position < widthOfPlayerSpriteSheet) {
      position = position + diff;
    } else {
      position = widthOfEachPlayerSprite;
    }
  }, speed);
}

startPlayer2Animation();
