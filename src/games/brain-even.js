import { generateRandomInt } from '../utils.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export const game = () => {
  const isEven = (num) => num % 2 === 0;
  const number = generateRandomInt(1, 20);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();

  return { correctAnswer, question };
};
