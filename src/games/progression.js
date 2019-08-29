import startCoreGame from '..';
import randomInteger from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const startingValue = randomInteger(1, 100);
  const progressionStep = randomInteger(1, 100);
  const lastValue = startingValue + progressionStep * progressionLength;
  const question = [];
  let correctAnswer;
  const hiddenValue = startingValue + progressionStep * randomInteger(1, progressionLength);
  for (let i = startingValue; i < lastValue; i += progressionStep) {
    if (i === hiddenValue) {
      correctAnswer = String(i);
      question.push('..');
    } else {
      question.push(i);
    }
  }
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => startCoreGame(getGameData, task);
