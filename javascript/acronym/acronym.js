//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  let acronym = phrase
    .toUpperCase()
    .replace(/_/g, '')
    .split(/\s|-/)
    .reduce((accumulator, current) => {
      accumulator += current.slice(0, 1);
      return accumulator;
    },
      '');

  return acronym;
};
