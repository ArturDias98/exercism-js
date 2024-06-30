//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let count = { 'A': 0, 'C': 0, 'G': 0, 'T': 0 };
  for (const i of strand) {
    if (i in count) {
      count[i] += 1;
    } else {
      throw new Error('Invalid nucleotide in strand');
    }
  }
  return `${count['A']} ${count['C']} ${count['G']} ${count['T']}`;
}
