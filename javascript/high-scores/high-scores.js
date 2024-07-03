//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(list) {
    this.list = list;
  }

  get scores() {
    return this.list;
  }

  get latest() {
    return this.list[this.list.length - 1];
  }

  get personalBest() {
    return Math.max(...this.list);
  }

  get personalTopThree() {
    let topThree = [];
    let count = this.list.length < 3
      ? this.list.length
      : 3;
      
    for (let index = 0; index < count; index++) {
      let max = Math.max(...this.list);
      this.list.splice(this.list.indexOf(max), 1);
      topThree.push(max);
    }

    return topThree;
  }
}
