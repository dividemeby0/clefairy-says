var animationInterval;
var spriteSheet = document.getElementById("player2-sprite");
var widthOfSpriteSheet = 55;
var widthOfEachSprite = 17;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = widthOfEachSprite;
  const speed = 800;
  const diff = widthOfEachSprite;
  animationInterval = setInterval(() => {
    spriteSheet.style.backgroundPosition = `-${position}px 0px`;
    if (position < widthOfSpriteSheet) {
      position = position + diff;
    } else {
      position = widthOfEachSprite;
    }
  }, speed);
}

startAnimation();