import promptly from 'promptly';
import { generateRandomInt } from '../utils.js';

const play = async (name) => {
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstProgressionNumber = generateRandomInt(1, 10);
    const hiddenElementIndex = generateRandomInt(0, 9);
    const progressionIncrementValue = generateRandomInt(1, 5);
    const progression = (new Array(10)).fill(firstProgressionNumber, 0, 10)
      .map((element, currentIndex) => (element + progressionIncrementValue * currentIndex));

    const correctAnswer = progression[hiddenElementIndex].toString();
    const question = progression
      .slice(0, hiddenElementIndex).concat('..')
      .concat(progression.slice(hiddenElementIndex + 1))
      .join(' ');

    console.log(`Question: ${question}`);
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
