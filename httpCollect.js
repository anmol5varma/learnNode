const http = require('http');
const bl = require('bl');

// function getAllUrl(url) {
const url = process.argv[2];
http.get(url, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }
    const res = data.toString();
    console.log(res.length);
    console.log(res);
    return true;
  }));
});
// }

// module.exports = getAllUrl;
