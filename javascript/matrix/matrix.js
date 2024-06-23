//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.rows = string.split('\n')
      .map(line => line.split(' ').map(Number))
    this.columns = this.rows[0].map((_, c) => this.rows.map(row => row[c]))
  }
}
