//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const seconds = 10 ** 12;
  //date.setSeconds();
  return new Date(date.getTime() + seconds);
};
