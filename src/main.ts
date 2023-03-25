import { PatternsConfig } from './types/PatternsConfig';
const patterns = require('./utils/patterns');
const getRandomNumber = require('./utils/getRandomNumber');

function getRandom(
  length: number,
  patternConfig: PatternsConfig = { letters: true, digits: true },
  upper: boolean = false
) {
  let code = '';

  const patternsList = [];

  for (const key in patternConfig) {
    patternsList.push(patterns[key]);
  }

  const patternsLength = patternsList.length;

  for (let i = 0; i < length; i++) {
    const patternType = patternsList[getRandomNumber(0, patternsLength)];
    const upperChar = Boolean(getRandomNumber(0, 2));
    const char = patternType[getRandomNumber(0, patternType.length)];

    code += upperChar && upper ? char.toUpperCase() : char;
  }

  return code;
}

module.exports = getRandom;
