//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  return word
    .toLowerCase()
    .replace(/[-\s]/g, "")
    .split('')
    .every((w, index, array) => {
      return array.indexOf(w) === index &&
        w !== ' ' &&
        w !== '-';
    });
};
