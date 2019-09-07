import startCoreGame from '..';
import randomInteger from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const startingValue = randomInteger(1, 100);
  const progressionStep = randomInteger(1, 100);
  const question = [];
  const hiddenValueIndex = randomInteger(0, progressionLength - 1);
  const correctAnswer = String(startingValue + progressionStep * hiddenValueIndex);
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenValueIndex) {
      question.push('..');
    } else {
      question.push(startingValue + progressionStep * i);
    }
  }
  const gameData = [question, correctAnswer];
  return gameData;
};

export default () => startCoreGame(getGameData, task);
