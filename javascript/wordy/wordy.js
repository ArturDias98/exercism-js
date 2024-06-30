//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  if (!question.startsWith("What is")) {
    throw new Error('Unknown operation');
  }
  const r = question.replace("What is", "").replace("?", "").replaceAll(" by", "").trim();
  if (!r) {
    throw new Error('Syntax error');
  }
  const tokens = r.split(' ');
  let value = Number(tokens[0]);
  let index = 1;
  while (index < tokens.length) {
    const op = tokens[index++];
    if (isNumber(op)) {
      throw new Error('Syntax error');
    }
    if (!operations[op]) {
      throw new Error('Unknown operation');
    }
    if (index >= tokens.length) {
      throw new Error('Syntax error');
    }
    const nextVal = tokens[index++];
    if (!isNumber(nextVal)) {
      throw new Error('Syntax error');
    }
    value = operations[op](value, Number(nextVal));
  }
  return value;
};

const operations = Object.freeze({
  'plus': (x, y) => x + y,
  'minus': (x, y) => x - y,
  'multiplied': (x, y) => x * y,
  'divided': (x, y) => x / y,
});

const isNumber = (str) => {
  return !isNaN(Number(str));
}

