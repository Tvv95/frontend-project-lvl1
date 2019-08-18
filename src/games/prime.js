import { randomInteger } from '..';

const searchSimple = (number) => {
  const iter = (counter) => {
    if (counter === 1) {
      return true;
    }
    if (number % counter === 0) {
      return false;
    }
    return iter(counter - 1);
  };
  return iter(Math.round(Math.sqrt(number)));
};

export default () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameInformation = [];
  const question = randomInteger(1, 100);
  gameInformation.push(question);
  const correctAnswer = searchSimple(question) ? 'yes' : 'no';
  gameInformation.push(correctAnswer);
  gameInformation.push(task);
  return gameInformation;
};
