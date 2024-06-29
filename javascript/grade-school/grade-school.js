//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.gradeMap = new Map();
  }
  roster() {
    const displayMap = {};
    for (const [k, v] of this.gradeMap) {
      displayMap[k] = [...v].sort()
    }
    return displayMap;
  }
  add(name, grade) {
    if (!this.gradeMap.has(grade)) this.gradeMap.set(grade, new Set([name]));
    for (const names of this.gradeMap.values()) {
      names.delete(name);
    }
    this.gradeMap.set(grade, new Set([name, ...this.gradeMap.get(grade)]));
  }
  grade(grade) {
    if (this.gradeMap.has(grade)) return [...this.gradeMap.get(grade)].sort();
    return [];
  }
}
