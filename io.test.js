const io = require('./io.js');

describe('Read the file', () => {
  test('Counting number of lines in input path', () => {
    expect(io('./test.txt')).toBe(2);
  });
  test('Counting number of lines in empty file', () => {
    expect(io('./test1.txt')).toBe(0);
  });
});
