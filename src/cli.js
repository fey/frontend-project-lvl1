import promptly from 'promptly';
import isEven from './isEven.js';

export default async () => {
  console.log('Welcome to Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);

  isEven(name);
};
