//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (word) => {
  return alphabet.every(letter => word.toLowerCase().includes(letter));
};

const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
