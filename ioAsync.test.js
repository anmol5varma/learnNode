const ioA = require('./ioAsync.js');

describe('Read the file', () => {
  test('Counting number of lines in input path', () => {
    expect(ioA('./test.txt')).toBe(2);
  });
  test('Counting number of lines in empty file', () => {
    expect(ioA('./test1.txt')).toBe(0);
  });
});
