import { generateRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';
const startNewGame = () => {
  const firstProgressionNumber = generateRandomInt(1, 50);
  const hiddenElementIndex = generateRandomInt(0, 9);
  const progressionIncrementValue = generateRandomInt(1, 5);
  const progression = (new Array(10)).fill(firstProgressionNumber, 0, 10)
    .map((element, currentIndex) => (element + progressionIncrementValue * currentIndex));

  const correctAnswer = progression[hiddenElementIndex].toString();
  const question = progression
    .slice(0, hiddenElementIndex).concat('..')
    .concat(progression.slice(hiddenElementIndex + 1))
    .join(' ');

  return { correctAnswer, question };
};

export default { description, startNewGame };
