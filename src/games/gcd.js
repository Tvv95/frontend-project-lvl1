import startCoreGame from '..';
import randomInteger from '../utils';

const searchGcd = (first, second) => {
  if (first % second === 0) {
    return second;
  }
  return searchGcd(second, first % second);
};
const task = 'Find the greatest common divisor of given numbers.';

const getGameInformation = () => {
  const firstValue = randomInteger(1, 100);
  const secondValue = randomInteger(1, 100);
  const correctAnswer = searchGcd(Math.max(firstValue, secondValue),
    Math.min(firstValue, secondValue));
  const gameInformation = [`${firstValue} ${secondValue}`, String(correctAnswer)];
  return gameInformation;
};

export default () => startCoreGame(getGameInformation, task);
