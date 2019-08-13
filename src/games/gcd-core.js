import { randomInteger } from '../index';

export default () => {
  const arrAnsw = [];
  const firstRandInt = randomInteger(1, 100);
  const secRandInt = randomInteger(1, 100);
  arrAnsw.push(`${firstRandInt} ${secRandInt}`);
  let max;
  let min;
  if (firstRandInt >= secRandInt) {
    max = firstRandInt;
    min = secRandInt;
  } else {
    max = secRandInt;
    min = firstRandInt;
  }
  const gcd = (first, sec) => {
    if (first % sec === 0) {
      return sec;
    }
    return gcd(sec, first % sec);
  };
  const corrAnswer = gcd(max, min);
  arrAnsw.push(String(corrAnswer));
  return arrAnsw;
};
