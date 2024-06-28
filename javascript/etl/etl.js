//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldScores) => {
  let newScores = {};
  for (let [score, letters] of Object.entries(oldScores)) {
    for(let l of letters){
      newScores[l.toLowerCase()] = parseInt(score);
    }  
  }
  return newScores;
};
