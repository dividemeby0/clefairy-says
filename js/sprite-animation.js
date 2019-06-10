var animationInterval;
var spriteSheet = document.getElementById("teacher-image");
var heightOfSpriteSheet = 760;
var heightOfEachSprite = 125;

function stopAnimation() {
  clearInterval(animationInterval);
}

function startAnimation() {
  var position = heightOfEachSprite;
  const speed = 350;
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