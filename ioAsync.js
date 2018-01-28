const fs = require('fs');

function ioA(filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return console.error(err);
    }

    const ans = (data.toString().split('\n').length) - 1;
    console.log(ans);
    return ans;
  });
  // const file = fs.readFileSync(filePath);
}
module.exports = ioA;
