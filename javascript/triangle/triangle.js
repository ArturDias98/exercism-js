//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides.sort();
    this.valid = this.sides[0] + this.sides[1] > this.sides[2];
  }

  get isEquilateral() {
    return this.sides
      .every(num => num === this.sides[0])
      && this.valid;
  }

  get isIsosceles() {
    return this.sides
      .some((num, index, array) => array.indexOf(num) != index)
      && this.valid;
  }

  get isScalene() {
    return this.sides
      .every((num, index, array) => array.indexOf(num) === index)
      && this.valid;
  }
}
