//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let word = '';

  if (number % 3 === 0) {
    word += 'Pling';
  }

  if (number % 5 === 0) {
    word += 'Plang';
  }

  if (number % 7 === 0) {
    word += 'Plong';
  }

  return word !== ''
    ? word
    : String(number);
};
