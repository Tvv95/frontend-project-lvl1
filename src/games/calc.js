import { randomInteger } from '..';

export default () => {
  const task = 'What is the result of the expression?';
  const gameInformation = [];
  const firstRandomNumber = randomInteger(1, 100);
  const secondRandomNumber = randomInteger(1, 100);
  const operations = [firstRandomNumber + secondRandomNumber,
    firstRandomNumber - secondRandomNumber, firstRandomNumber * secondRandomNumber];
  const operationsCount = 3;
  switch (randomInteger(1, operationsCount)) {
    case 1:
      gameInformation.push(`${firstRandomNumber} + ${secondRandomNumber}`);
      gameInformation.push(String(operations[0]));
      break;
    case 2:
      gameInformation.push(`${firstRandomNumber} - ${secondRandomNumber}`);
      gameInformation.push(String(operations[1]));
      break;
    case 3:
      gameInformation.push(`${firstRandomNumber} * ${secondRandomNumber}`);
      gameInformation.push(String(operations[2]));
      break;
    default:
      break;
  }
  gameInformation.push(task);
  return gameInformation;
};
