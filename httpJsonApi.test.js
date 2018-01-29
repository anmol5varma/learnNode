const tests = require('./httpJsonApi.js');

describe('Tests for parsetime api', () => {
  {
    const input = new Date('2018-01-29T15:37:44.974Z');
    const output = { hour: 21, minute: 7, second: 44 };
    test('input is a normal date obejct', () => {
      expect(tests.toHourMinuteSeconds(input)).toEqual(output);
    });
  }
  {
    const input = new Date('2018-01-29T10:08:02.156Z');
    const output = { hour: 15, minute: 38, second: 2 };
    test('input is a normal date obejct', () => {
      expect(tests.toHourMinuteSeconds(input)).toEqual(output);
    });
  }
});


describe('Tests for unixtime api', () => {
  {
    const input = new Date('2018-01-29T15:37:44.974Z');
    const output = { unixtime: 1517220482156 };
    test('input is a normal date obejct', () => {
      expect(tests.toUnixTime(input)).toEqual(output);
    });
  }
  {
    const input = new Date('2018-01-29T10:08:02.156Z');
    const output = { unixtime: 1517220482156 };
    test('input is a normal date obejct', () => {
      expect(tests.toUnixTime(input)).toEqual(output);
    });
  }
});
