var animationInterval;
var spriteSheet = document.getElementById("player1-sprite");
var heightOfSpriteSheet = 176;
var heightOfEachSprite = 28;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = heightOfEachSprite;
  const speed = 800;
  const diff = heightOfEachSprite;
  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `0px -${position}px`;
    if (position < heightOfSpriteSheet) {
      position = position + diff;
    } else {
      position = heightOfEachSprite;
    }
  }, speed);
}

startAnimation();