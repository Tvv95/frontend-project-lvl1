const randomInteger = (min, max) => {
  const randomValue = min + Math.random() * (max + 1 - min);
  return Math.floor(randomValue);
};
export default randomInteger;
