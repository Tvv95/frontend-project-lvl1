import { randomInteger } from '../index';

export default () => {
  const arrAnsw = [];
  const currRandInt = randomInteger(1, 100);
  arrAnsw.push(currRandInt);
  const corrAnswer = currRandInt % 2 === 0 ? 'yes' : 'no';
  arrAnsw.push(corrAnswer);
  return arrAnsw;
};
