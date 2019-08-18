import readlineSync from 'readline-sync';

export const randomInteger = (min, max) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export const coreGames = (game) => {
  let gameInfo = game();
  console.log('Welcome to the Brain Games!');
  console.log(gameInfo[2]);
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  let counter = 0;
  const core = () => {
    if (counter > 0) {
      gameInfo = game();
    }
    console.log(`Question: ${gameInfo[0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gameInfo[1];
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
      } else {
        core();
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
    }
  };
  core();
};
