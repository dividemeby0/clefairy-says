(function () {
  "use strict"

  const instructions = ["up", "down", "up", "down"]

  function listenKeys() {
    const allowedKeys = ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
    const inputArray = [];
    window.addEventListener("keydown", function newInput(evt) {
      // Creates the array according to the pressed keys. It can be no longer than the instructions array.
      if (allowedKeys.includes(evt.key) && inputArray.length < instructions.length) {
        let direction = evt.key.split("Arrow").pop().toLocaleLowerCase();
        inputArray.push(`${direction}`);
        if (inputArray.length === instructions.length) {
          console.log(inputArray);
          compareArrays(inputArray);
        }
      }
    });
  };

  function compareArrays(inputArray) {
    if (inputArray.length = instructions.length) {
      for (let i = 0; i < instructions.length; i++) {
        if (inputArray[i] != instructions[i]) {
          console.log("You lost :(");
        } else {
          console.log("You won!");
        }
      };
    }
  }

  window.addEventListener("DOMContentLoaded",listenKeys);
}());

