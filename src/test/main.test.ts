const randomFunction = require('../main');

describe('Main functionality', () => {
  const result = randomFunction(8);
  test('should return string', () => {
    expect(typeof result).toBe('string');
  });
  test('should be 8 chars length for first argument 8', () => {
    expect(result.length).toBe(8);
  });
});

describe('Random digits string', () => {
  const result = randomFunction(8, { digits: true });
  test('should contain only strings for digits: true', () => {
    expect(isNaN(+result)).toBe(false);
  });
});

describe('Random symbols string', () => {
  const result = randomFunction(8, { symbols: true });
  test('should contain only symbols for symbols: true', () => {
    expect(result.toUpperCase() === result.toLowerCase()).toBe(true);
  });
});

describe('Uppercase tests', () => {
  const result = randomFunction(16, { letters: true }, true);
  test('should contain uppercase letters for upper: true', () => {
    expect(result.toUpperCase() !== result.toLowerCase()).toBe(true);
  });
});
