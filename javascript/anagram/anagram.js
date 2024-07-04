//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, words) => {
  return words.filter(
    (aux) => aux.toLowerCase() !== word.toLowerCase()
  ).filter((w) => sortWord(w) === sortWord(word)
  )
};

function sortWord(word) {
  return word
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
