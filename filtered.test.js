const fileL = require('./filtered.js');

describe('Read the file', () => {
  test('Counting number of txt in input path', () => {
    expect(fileL('/Users/anmolvarma/nodeExercise/', 'txt')).toBe(2);
  });
  test('Counting number of txt in input path', () => {
    expect(fileL('/Users/anmol5varma/testing/', 'txt')).toBe(0);
  });
});

describe('Illegal inputs', () => {
  test('Null input path', () => {
    expect(fileL('null', 'txt')).toBe(false);
  });
  test('undefined input path', () => {
    expect(fileL('', '')).toBe(false);
  });
});
