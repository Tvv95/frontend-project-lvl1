import startCoreGame from '..';
import randomInteger from '../utils';

const searchGcd = (first, second) => {
  if (first % second === 0) {
    return second;
  }
  return searchGcd(second, first % second);
};
const task = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstValue = randomInteger(1, 100);
  const secondValue = randomInteger(1, 100);
  const question = `${firstValue} ${secondValue}`;
  const correctAnswer = String(searchGcd(firstValue, secondValue));
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => startCoreGame(getGameData, task);
