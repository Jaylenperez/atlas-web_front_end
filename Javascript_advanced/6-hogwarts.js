class studentHogwarts {
    // Private variables
    #privateScore = 0;
    #name = null;
  
    // Private method to change the score
    #changeScoreBy(points) {
      this.#privateScore += points;
    }
  
    // Public method to set the name
    setName(newName) {
      this.#name = newName;
    }
  
    // Public method to reward the student (add 1 to score)
    rewardStudent() {
      this.#changeScoreBy(1);
    }
  
    // Public method to penalize the student (subtract 1 from score)
    penalizeStudent() {
      this.#changeScoreBy(-1);
    }
  
    // Public method to get the current score
    getScore() {
      return `${this.#name}: ${this.#privateScore}`;
    }
  }
  
  // Create an instance for Harry
  const harry = new studentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); // Harry: 4
  
  // Create an instance for Draco
  const draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); // Draco: -2
  