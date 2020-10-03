import { generateRandomInt } from '../utils.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const description = 'Find the greatest common divisor of given numbers.';
const makeGame = () => {
  const number1 = generateRandomInt(1, 30);
  const number2 = generateRandomInt(1, 30);
  const correctAnswer = gcd(number1, number2).toString();
  const question = `${number1} ${number2}`;

  return { correctAnswer, question };
};

export default { description, makeGame };
