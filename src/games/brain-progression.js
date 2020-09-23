import promptly from 'promptly';
import { generateRandomInt } from '../utils.js';

const play = async (name) => {
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = generateRandomInt(1, 20);
    const correctAnswer = '3';

    const progressionNumbers = [1, 2, '..', 4, 5, 6];

    console.log(`Question: ${progressionNumbers.join(' ')}`);
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
