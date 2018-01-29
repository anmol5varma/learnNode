const ioA = require('./ioAsync.js');

describe('Read the file', () => {
  test('Counting number of lines in input path', (done) => {
    const returnFn = (res) => {
      expect(res).toEqual(2);
      done();
    };
    expect(ioA('./test.txt', returnFn));
  });

  test('Counting number of lines in empty file', (done) => {
    const returnFn = (res) => {
      expect(res).toEqual(0);
      done();
    };
    expect(ioA('./test2.txt', returnFn));
  });
});
