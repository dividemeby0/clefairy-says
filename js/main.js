(function () {
  "use strict"

  const instructions = ["up", "down", "up", "down"]

  function listenKeys() {
    const allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    const inputArray = [];
    window.addEventListener("keydown", function newInput(evt) {
      if (allowedKeys.includes(evt.key) && inputArray.length < instructions.length) {
        let direction = evt.key.split("Arrow").pop().toLocaleLowerCase();
        inputArray.push(`${direction}`);
      };
      console.log(inputArray);
      // if (inputArray.length = instructions.length) {
      //   for (let i = 0; i < instructions.length; i++) {
      //     if (inputArray[i] = instructions[i])
      //   }
      //   console.log("You won");
      }
    });  
  };

  // function compareArrays() {
  // }

  window.addEventListener("DOMContentLoaded",listenKeys);
}());

