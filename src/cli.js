import promptly from 'promptly';

export const greeting = async () => {
  const name = await promptly.promt('Your answer: ');
};
