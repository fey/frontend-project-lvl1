/* eslint-disable no-console */
import promptly from 'promptly';

export default async () => {
  console.log('Welcome to Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);
};
