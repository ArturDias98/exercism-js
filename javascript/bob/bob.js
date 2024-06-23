//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RESPONSES = {
  WHATEVER: 'Whatever.',
  WHOA: 'Whoa, chill out!',
  CALM_DOWN: 'Calm down, I know what I\'m doing!',
  SURE: 'Sure.',
  FINE: 'Fine. Be that way!',
}

const isAllCaps = str => str.split('').every(char => char === char.toUpperCase());

const hasAlpha = str => !!str.trim().match(/[a-zA-Z]+/);

const isEmpty = str => str.trim().length === 0;

const isAQuestion = str => str.trim().charAt(str.trim().length - 1) === '?';

export const hey = (str = '') => {
  if (isAllCaps(str)  && hasAlpha(str) && isAQuestion(str)) {
    return RESPONSES.CALM_DOWN;
  } else if (hasAlpha(str) && isAllCaps(str)) {
    return RESPONSES.WHOA;
  } else if (isAQuestion(str)) {
    return RESPONSES.SURE;
  } else if (isEmpty(str)) {
    return RESPONSES.FINE;
  }
  return RESPONSES.WHATEVER;
};
