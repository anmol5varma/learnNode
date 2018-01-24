const sum = require('./babyStep.js');

describe('pass only numbers', () => {
  test('input are numbers', () => {
    expect(sum(['1', '2', '3'])).toBe(6);
  });
  test('input is are float', () => {
    expect(sum(['1.1', '2.2', '3.3'])).toBe(6.6);
  });
});

describe('pass other things', () => {
  test('input are strings', () => {
    expect(sum(['cc', 'bb', 'aa'])).toBe(false);
  });
  test('input is bool', () => {
    expect(sum(['true', 'false', false])).toBe(false);
  });
});
