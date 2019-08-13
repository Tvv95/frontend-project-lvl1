import { randomInteger } from '../index';

export default () => {
  let currNumb = randomInteger(1, 100);
  const progressNumb = randomInteger(1, 100);
  const arr = [];
  const arrAnsw = [];
  let rightAnswer;
  const emptyNumb = randomInteger(1, 10);
  for (let i = 1; i <= 10; i += 1) {
    if (i === emptyNumb) {
      rightAnswer = currNumb;
      arr.push('..');
    } else {
      arr.push(currNumb);
    }
    currNumb += progressNumb;
  }
  arrAnsw.push(arr);
  arrAnsw.push(String(rightAnswer));
  return arrAnsw;
};
