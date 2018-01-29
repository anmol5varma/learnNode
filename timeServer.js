const net = require('net');

function toDateFormat(year, month, dd, hour, min) {
  let mm;
  let m;
  let d;
  let h;
  if (dd < 10) {
    d = `0${dd}`;
  } else {
    d = dd;
  }

  if (month < 10) {
    mm = `0${month}`;
  } else {
    mm = month;
  }

  if (hour < 10) {
    h = `0${hour}`;
  } else {
    h = hour;
  }

  if (min < 10) {
    m = `0${min}`;
  } else {
    m = min;
  }
  return `${year}-${mm}-${d} ${h}:${m}\n`;
}

const server = net.createServer((socket) => {
  const date = new Date();
  const result = toDateFormat(
    date.getFullYear(), date.getMonth() + 1,
    date.getDate(), date.getHours(), date.getMinutes(),
  );

  socket.write(result);
  socket.end();
  // socket.end();
});
server.listen(process.argv[2]);

module.exports = toDateFormat;
