const getData = require('./fileServer.js');
const path = require('path');


// const returnFn = res => res;
describe('Test the file reading function', () => {
  {
    const output = 'My name is anmol\n';
    test('matching content of the file', (done) => {
      const returnFn = (res) => {
        expect(res).toEqual(output);
        done();
      };
      getData(path.join(__dirname, 'test1.txt'), returnFn);
    });
  }
  {
    const output = false;
    test('FILE DOESNT EXSIST', (done) => {
      const returnFn = (res) => {
        expect(res).toEqual(output);
        done();
      };
      getData(path.join(__dirname, 'tes.txt'), returnFn);
    });
  }
});
