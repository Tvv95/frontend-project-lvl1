import { randomInteger } from '..';

export default () => {
  const task = 'What number is missing in the progression?';
  let currentNumber = randomInteger(1, 100);
  const progressNumber = randomInteger(1, 100);
  const progressLength = 10;
  const question = [];
  const gameInformation = [];
  let rightAnswer;
  const emptyNumber = randomInteger(1, progressLength);
  for (let i = 1; i <= 10; i += 1) {
    if (i === emptyNumber) {
      rightAnswer = currentNumber;
      question.push('..');
    } else {
      question.push(currentNumber);
    }
    currentNumber += progressNumber;
  }
  gameInformation.push(question);
  gameInformation.push(String(rightAnswer));
  gameInformation.push(task);
  return gameInformation;
};
