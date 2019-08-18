import { randomInteger } from '..';

const searchGCD = (first, second) => {
  if (first % second === 0) {
    return second;
  }
  return searchGCD(second, first % second);
};

export default () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const gameInformation = [];
  const firstRandomNumber = randomInteger(1, 100);
  const secondRandomNumber = randomInteger(1, 100);
  gameInformation.push(`${firstRandomNumber} ${secondRandomNumber}`);
  let max;
  let min;
  if (firstRandomNumber >= secondRandomNumber) {
    max = firstRandomNumber;
    min = secondRandomNumber;
  } else {
    max = secondRandomNumber;
    min = firstRandomNumber;
  }
  const correctAnswer = searchGCD(max, min);
  gameInformation.push(String(correctAnswer));
  gameInformation.push(task);
  return gameInformation;
};
