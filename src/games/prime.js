import startCoreGame from '..';
import randomInteger from '../utils';

const isPrime = (value) => {
  if (value < 2) {
    return false;
  }
  const iter = (counter) => {
    if (counter === Math.round(Math.sqrt(value))) {
      return true;
    }
    if (value % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => startCoreGame(getGameData, task);
