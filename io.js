const fs = require('fs');

function io(filePath) {
  const file = fs.readFileSync(filePath);
  const ans = (file.toString().split('\n').length) - 1;
  console.log(ans);
  return ans;
}
module.exports = io;
