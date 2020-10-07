import { generateRandomInt, getRandomElement } from '../utils.js';

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

const description = 'What is the result of the expression?';
const makeRound = () => {
  const number1 = generateRandomInt(1, 10);
  const number2 = generateRandomInt(1, 10);
  const operator = getRandomElement(['+', '-', '*']);

  const correctAnswer = calculate(operator, number1, number2).toString();

  const question = `${number1} ${operator} ${number2}`;

  return { correctAnswer, question };
};

export default { description, makeRound };
