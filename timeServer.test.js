const date = require('./timeServer.js');

describe('Test the toDateFormat function', () => {
  {
    const output = '2014-11-25 23:40\n';
    test('input are numbers', () => {
      expect(date(2014, 11, 25, 23, 40)).toBe(output);
    });
  }
  {
    const output = '2014-01-05 03:01\n';
    test('input are numbers', () => {
      expect(date(2014, 1, 5, 3, 1)).toBe(output);
    });
  }
});
