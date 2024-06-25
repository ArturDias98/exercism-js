//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  let value = number;
  let count = 0;
  while (value > 1) {
    if (value % 2 === 0) {
      value = value / 2;
    }
    else {
      value = (value * 3) + 1;
    }
    count++;
  }

  return count;
};
