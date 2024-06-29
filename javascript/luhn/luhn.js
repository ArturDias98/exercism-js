//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (numStr) => {
  numStr = numStr.replace(/\s/g, '');
  if (numStr.length < 2) return false;
  if ((/[a-zA_Z#$:-]/).test(numStr)) return false;
  let total = [...numStr].map(x => +x).reverse().map((item, index) => (index & 1) ? (item === 9) ? 9 : item * 2 % 9 : item).reduce((a, b) => a + b);
  return (total % 10 === 0);
};
