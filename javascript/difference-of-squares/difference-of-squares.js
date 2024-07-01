//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(number) {
    this.n = number;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let index = 1; index <= this.n; index++) {
      sum += index ** 2;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for (let index = 1; index <= this.n; index++) {
      sum += index;
    }

    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
