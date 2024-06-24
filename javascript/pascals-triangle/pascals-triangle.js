//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = n => {
  const result = Array(n).fill().map((_, i) => Array(i + 1).fill(1));
  for (let i = 2; i < result.length; i++) {
    for (let j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
  }
  return result;
};
