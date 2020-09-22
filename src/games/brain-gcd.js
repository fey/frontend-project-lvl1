import promptly from 'promptly';
import { generateRandomInt } from '../utils.js';

const play = async (name) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  console.log('Find the greatest common divisor of given numbers.');
  const maxRandomNumber = 50;

  for (let i = 1; i <= 3; i += 1) {
    const number1 = generateRandomInt(maxRandomNumber);
    const number2 = generateRandomInt(maxRandomNumber);
    const correctAnswer = gcd(number1, number2).toString();

    console.log(`Question: ${number1} ${number2}`);
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
