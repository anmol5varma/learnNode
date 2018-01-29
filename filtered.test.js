const fileL = require('./filtered.js');

describe('Read the file', () => {
  test('Counting number of txt in input path', (done) => {
    const returnFn = (value) => {
      expect(value).toBe(3);
      done();
    };

    fileL('/Users/anmolvarma/nodeExercise/', 'txt', returnFn);
  });
  test('Counting number of txt in testing path', (done) => {
    const returnFn = (value) => {
      expect(value).toBe(0);
      done();
    };
    fileL('/Users/anmolvarma/testing/', 'txt', returnFn);
  });
});

describe('Illegal inputs', () => {
  test('Null input path', (done) => {
    const returnFn = (value) => {
      expect(value).toBe(false);
      done();
    };
    fileL('null', 'txt', returnFn);
  });
  test('undefined input path', (done) => {
    const returnFn = (value) => {
      expect(value).toBe(false);
      done();
    };
    fileL('', '', returnFn);
  });
});
