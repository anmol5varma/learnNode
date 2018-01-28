const http = require('http');

function getUrl(url) {
  // const url = process.argv[2];
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
  });
}

module.exports = getUrl;
