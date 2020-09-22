import promptly from 'promptly';

const isEven = (num) => num % 2 === 0;
const generateRandomInt = (max) => Math.floor(Math.random() * max);
const play = async (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxRandomNumber = 10;

  for (let i = 1; i <= 3; i += 1) {
    const number = generateRandomInt(maxRandomNumber);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const playerAnswer = await promptly.prompt('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}`!);
};

export default async () => {
  console.log('Welcome to Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);

  play(name);
};
