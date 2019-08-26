import readlineSync from 'readline-sync';

export default (getGameInformation, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${task}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const gameRounds = 3;
  let correctAnswers = 0;
  for (let i = 0; i < gameRounds; i += 1) {
    const gameInformation = getGameInformation();
    console.log(`Question: ${gameInformation[0]}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gameInformation[1];
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
      if (correctAnswers === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      i = gameRounds;
    }
  }
};
