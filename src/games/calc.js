import startCoreGame from '..';
import randomInteger from '../utils';

const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getGameInformation = () => {
  const firstValue = randomInteger(1, 100);
  const secondValue = randomInteger(1, 100);
  const currentOperation = randomInteger(0, operations.length - 1);
  const gameInformation = [`${firstValue} ${operations[currentOperation]} ${secondValue}`];
  switch (currentOperation) {
    case 0:
      gameInformation.push(String(firstValue + secondValue));
      break;
    case 1:
      gameInformation.push(String(firstValue - secondValue));
      break;
    case 2:
      gameInformation.push(String(firstValue * secondValue));
      break;
    default:
      break;
  }
  return gameInformation;
};
export default () => startCoreGame(getGameInformation, task);
