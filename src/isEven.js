import promptly from 'promptly';

const isEven = num => num % 2 === 0;
const play = async (name) => {

  const number = 5;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    console.log(`Question: ${number}`);
    const playerAnswer = await promptly.prompt('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`);
};

export default play;
