import { generateRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';
const startNewGame = () => {
  const makeProgression = (startValue, step, length) => (new Array(length))
    .fill(startValue)
    .map((element, currentIndex) => (element + step * currentIndex));

  const progressionStart = generateRandomInt(1, 50);
  const progressionLength = 10;
  const hiddenElementIndex = generateRandomInt(0, progressionLength - 1);
  const progressionStep = generateRandomInt(1, 5);

  const progression = makeProgression(progressionStart, progressionStep, progressionLength);

  const correctAnswer = progression[hiddenElementIndex].toString();

  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return { correctAnswer, question };
};

export default { description, startNewGame };
