import { randomInteger } from '../index';

export default () => {
  const arrAnsw = [];
  const currRandInt = randomInteger(1, 100);
  arrAnsw.push(currRandInt);
  const searchSimple = (number) => {
    const iter = (counter) => {
      if (counter === 1) {
        return 'yes';
      }
      if (number % counter === 0) {
        return 'no';
      }
      return iter(counter - 1);
    };
    return iter(Math.round(Math.sqrt(number)));
  };
  const corrAnswer = searchSimple(currRandInt);
  arrAnsw.push(corrAnswer);
  return arrAnsw;
};
