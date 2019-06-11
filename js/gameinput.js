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
      // console.log(this.inputArray);
      const hasErrors = this.compareArrays(); // returns true or false
      if (hasErrors) this.playerScore--;
      console.log(this.playerScore);
    }
  }

  compareArrays() {
    var errors = 0;
    // Compares the array with the instructions array and removes one point if it's wrong
    for (let i = 0; i < this.instructions.length; i++) {
      if (this.inputArray[i] != this.instructions[i]) {
        console.log ("You lost a point!");
        // this.playerScore--;
        errors++;
      }
    };
    console.log("Ok you won this turn");
    return errors === 0;
  }

  pointloss() {
    if (!this.compareArrays()) {
      this.playerScore -= 1;
      console.log(playerScore);
      return true;
    };
  }
}