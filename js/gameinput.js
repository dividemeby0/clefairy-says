class GameInput {
  constructor(instructions) {
    this.instructions = instructions;
    this.playerScore = 3;
    this.inputArray = [];
  }

  newInputArray(direction) {
    // Creates the array according to the pressed keys. It can be no longer than the instructions array.
    this.inputArray.push(`${direction}`);
    if (this.inputArray.length === this.instructions.length) {
      console.log(this.inputArray);
      }
    }

  compareArrays(inputArray) {
    for (let i = 0; i < this.instructions.length; i++) {
      if (inputArray[i] != this.instructions[i]) {
        console.log ("You lost a point!");
        return false;
      }
    };
    console.log("Ok you won");
    return true;
  }
}