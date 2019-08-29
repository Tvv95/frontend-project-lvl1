import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getGameData, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = getGameData();
    console.log(`Question: ${gameData[0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gameData[1];
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
