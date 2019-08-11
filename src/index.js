import readlineSync from 'readline-sync';

export default () => {
  let userName;

  const askName = () => {
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  };

  const randomInteger = (min, max) => {
    const randNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randNumber);
  };

  askName();
  let counter = 0;
  const coreEvenGame = () => {
    const currRandInt = randomInteger(1, 100);
    console.log(`Question: ${currRandInt}`);
    const answer = readlineSync.question('Your answer: ');
    const corrAnswer = currRandInt % 2 === 0 ? 'yes' : 'no';
    if (answer === corrAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
      } else {
        coreEvenGame();
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corrAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  coreEvenGame();
};
