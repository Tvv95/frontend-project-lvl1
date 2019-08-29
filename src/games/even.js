import startCoreGame from '..';
import randomInteger from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => startCoreGame(getGameData, task);
