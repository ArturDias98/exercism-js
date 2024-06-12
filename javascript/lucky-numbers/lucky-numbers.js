// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let convert1 = array1.join('');
  let convert2 = array2.join('');

  return Number(convert1) + Number(convert2);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let convert = String(value);
  let reverse = convert
  .split('')
  .reverse()
  .join('');

  return convert === reverse;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  let convert = Number(input);

  if (!input) {
    return 'Required field';
  }

  if (!Number(convert)) {
    return 'Must be a number besides 0';
  }

  return '';
}
