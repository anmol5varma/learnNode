const fs = require('fs');
const path = require('path');

function bar(callback) {
  foo((err, data) => {
    if (err) { return callback(err); } // early return
    data.filter(file => path
      .extname(file).toLowerCase() === `.${ext}`);
    callback(null, data);
    return data;
  });
}

module.exports = bar;
