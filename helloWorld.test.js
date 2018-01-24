const hey = require('./helloWorld.js');

describe('Call function', () => {
  test('Hii', () => {
    expect(hey()).toBe('HELLO WORLD');
  });
});
