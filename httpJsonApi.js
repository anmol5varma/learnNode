const http = require('http');
const url = require('url');

function toHourMinuteSeconds(date) {
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  return result;
}

function toUnixTime(date) {
  const result = { unixtime: date.getTime() };
  return result;
}
//
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   const path = url.parse(req.url, true);
//   // console.log(path.pathname);
//   const q = path.query.iso;
//   // console.log(q);
//   const date = new Date(q);
//   // console.log(date);
//   if (path.pathname === '/api/parsetime') {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(toHourMinuteSeconds(date)));
//     res.end();
//   } else {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(toUnixTime(date)));
//     res.end();
//   }
// });

// server.listen(process.argv[2]);

module.exports = { toHourMinuteSeconds, toUnixTime };
