var animationInterval;
var spriteSheet = document.getElementById("teacher-image");
spriteSheet.style.margin = "0px";
var heightOfSpriteSheet = 496;
var heightOfEachSprite = 124;

// function stopAnimation() {
//   clearInterval(animationInterval);
// }

function startAnimation() {
  var position = heightOfEachSprite;
  const speed = 600;
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
