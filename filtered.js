const fs = require('fs');
const path = require('path');

function fileList(filePath, exten, callback) {
  let len = 0;
  // const filePath = `${process.argv[2]}`;
  // const extension = `.${process.argv[3]}`;
  const extension = `.${exten}`;
  fs.readdir(filePath, (err, data) => {
    if (err) { console.log(err); return callback(false); }
    // console.log(data.length);
    const list = data.filter(file => path.extname(file).toLowerCase() === extension);
    // list.forEach((filename) => {
    //   console.log(filename);
    // });
    // console.log(list.length, '!!!!');
    len = list.length;
    callback(len);
    return len;
  });
  // return len;
  // return result;
}

module.exports = fileList;
