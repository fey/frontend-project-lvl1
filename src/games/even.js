import { generateRandomInt } from '../utils.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const makeRound = () => {
  const number = generateRandomInt(1, 20);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();

  return { correctAnswer, question };
};

export default { description, makeRound };
