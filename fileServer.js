const http = require('http');
const fs = require('fs');


function similarFunctionality(filePath, callback = console.log) {
  let result = '';
  try {
    const res = fs.createReadStream(filePath);
    res.on('data', (val) => {
      result += val.toString();
    });

    res.on('end', () => {
      callback(result);
    });
  } catch (err) {
    console.error(err, '88888');
    return callback(false);
  }
}
//
// const server = http.createServer((req, res) => {
//   const fileStream = fs.createReadStream(process.argv[3]);
//   fileStream.pipe(res);
// });
// server.listen(process.argv[2]);

module.exports = similarFunctionality;
