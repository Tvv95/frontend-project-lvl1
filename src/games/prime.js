import startCoreGame from '..';
import randomInteger from '../utils';

const isSimple = (value) => {
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
const getGameInformation = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = isSimple(question) ? 'yes' : 'no';
  const gameInformation = [question, correctAnswer];
  return gameInformation;
};

export default () => startCoreGame(getGameInformation, task);
