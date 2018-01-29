const fs = require('fs');

function ioA(filePath, callback = console.log) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      return callback(false);
    }

    const ans = (data.toString().split('\n').length) - 1;
    callback(ans);
    return ans;
  });
  // const file = fs.readFileSync(filePath);
}
module.exports = ioA;
