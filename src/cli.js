import promptly from 'promptly';

export default async (description, game) => {
  console.log('Welcome to Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);
  console.log(description);

  const iter = async (roundsLeft) => {
    if (roundsLeft === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    const { correctAnswer, question } = game();

    console.log(`Question: ${question}`);
    const playerAnswer = await promptly.prompt('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);

      return;
    }

    console.log('Correct!');
    iter(roundsLeft - 1);
  }

  iter(3);
};
