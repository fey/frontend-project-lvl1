import promptly from 'promptly';
import { generateRandomInt } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
const play = async (name) => {
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = generateRandomInt(1, 23);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

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
}
