import { generateRandomInt } from '../utils.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const description = 'Answer "yes" if the number is prime, otherwise answer "no".';
export const game = () => {
  const number = generateRandomInt(1, 23);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();

  return { correctAnswer, question };
};
