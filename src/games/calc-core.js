import { randomInteger } from '../index';

export default () => {
  const arrAnsw = [];
  const firstRandInt = randomInteger(1, 100);
  const secRandInt = randomInteger(1, 100);
  switch (randomInteger(1, 3)) {
    case 1:
      arrAnsw.push(`${firstRandInt} + ${secRandInt}`);
      arrAnsw.push(String(firstRandInt + secRandInt));
      break;
    case 2:
      arrAnsw.push(`${firstRandInt} - ${secRandInt}`);
      arrAnsw.push(String(firstRandInt - secRandInt));
      break;
    case 3:
      arrAnsw.push(`${firstRandInt} * ${secRandInt}`);
      arrAnsw.push(String(firstRandInt * secRandInt));
      break;
    default:
      break;
  }
  return arrAnsw;
};
