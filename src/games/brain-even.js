import { generateRandomInt } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const startNewGame = () => {
  const isEven = (num) => num % 2 === 0;
  const number = generateRandomInt(1, 20);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number.toString();

  return { correctAnswer, question };
};

export default { description, startNewGame };
