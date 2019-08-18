import { randomInteger } from '..';

export default () => {
  const task = 'Answer "yes" if number even otherwise answer "no".';
  const gameInformation = [];
  const question = randomInteger(1, 100);
  gameInformation.push(question);
  const isEven = (number) => number % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  gameInformation.push(correctAnswer);
  gameInformation.push(task);
  return gameInformation;
};
