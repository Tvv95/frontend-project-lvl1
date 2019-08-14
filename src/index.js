import readlineSync from 'readline-sync';

export const printGreeting = (greeting) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  console.log();
};
let userName;

export const askName = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
};
export const randomInteger = (min, max) => {
  const randNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randNumber);
};
let counter = 0;

export const coreGames = (gameFunc) => {
  const gameInfo = gameFunc();
  console.log(`Question: ${gameInfo[0]}`);
  const answer = readlineSync.question('Your answer: ');
  const corrAnswer = gameInfo[1];
  if (answer === corrAnswer) {
    console.log('Correct!');
    counter += 1;
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      coreGames(gameFunc);
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corrAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  }
};
