//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function isPaired(brackets) {
  brackets = brackets.replace(/[^{}\[\]\(\)]/g, '')
  for (let len = -1; len !== brackets.length;) {
    len = brackets.length
    brackets = brackets.replace(/\{\}|\[\]|\(\)/g, '')
  }
  return brackets.length === 0
}
