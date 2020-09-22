import promptly from 'promptly';
import { generateRandomInt, getRandomElement } from './utils.js';

const calculate = (operator, num1, num2) => {
  switch (operator) {

    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw Error('Unknown operator');
  }
};

const play = async (name) => {
  const isEven = (num) => num % 2 === 0;
  console.log('What is the result of the expression?');
  const maxRandomNumber = 10;

  for (let i = 1; i <= 3; i += 1) {
    const number1 = generateRandomInt(maxRandomNumber);
    const number2 = generateRandomInt(maxRandomNumber);
    const operator = getRandomElement(['+', '-', '*']);

    const correctAnswer = calculate(operator, number1, number2).toString();

    const question = `${number1} ${operator} ${number2}`;

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
