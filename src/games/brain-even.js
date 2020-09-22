import promptly from 'promptly';
import { generateRandomInt } from './utils.js';

const play = async (name) => {
  const isEven = (num) => num % 2 === 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxRandomNumber = 10;

  for (let i = 1; i <= 3; i += 1) {
    const number = generateRandomInt(1, 20);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const playerAnswer = await promptly.prompt('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default async () => {
  console.log('Welcome to Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);

  play(name);
};
