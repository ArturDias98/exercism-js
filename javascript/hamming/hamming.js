//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    throw new Error('strands must be of equal length');
  }
  
  let count = 0;

  for (let index = 0; index < dna1.length; index++) {
    if (dna1[index] !== dna2[index]) {
      count++;
    }
  }
  return count;
};
