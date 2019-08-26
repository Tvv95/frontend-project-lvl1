import startCoreGame from '..';
import randomInteger from '../utils';

const task = 'What number is missing in the progression?';
const progressionLength = 10;
let correctAnswer;

const getGameInformation = () => {
  let currentValue = randomInteger(1, 100);
  const progressionValue = randomInteger(1, 100);
  const question = [];
  const unknownValue = randomInteger(1, progressionLength);
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === unknownValue) {
      correctAnswer = currentValue;
      question.push('..');
    } else {
      question.push(currentValue);
    }
    currentValue += progressionValue;
  }
  const gameInformation = [question, String(correctAnswer)];
  return gameInformation;
};

export default () => startCoreGame(getGameInformation, task);
