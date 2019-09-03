import startCoreGame from '..';
import randomInteger from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getGameData = () => {
  const firstValue = randomInteger(1, 100);
  const secondValue = randomInteger(1, 100);
  const currentOperation = operations[randomInteger(0, operations.length - 1)];
  const question = `${firstValue} ${currentOperation} ${secondValue}`;
  let correctAnswer;
  switch (currentOperation) {
    case '+':
      correctAnswer = (String(firstValue + secondValue));
      break;
    case '-':
      correctAnswer = (String(firstValue - secondValue));
      break;
    case '*':
      correctAnswer = (String(firstValue * secondValue));
      break;
    default:
      break;
  }
  const gameData = [question, correctAnswer];
  return gameData;
};
export default () => startCoreGame(getGameData, task);
