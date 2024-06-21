//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = dna
    .split('')
    .reduce((accumulator, caractere) => {
      return accumulator + nucleotides[caractere];
    }, '')
  return rna;
};

const nucleotides = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};
