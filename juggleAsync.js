const http = require('http');
const bl = require('bl');


const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const result = [];

function four() {
  if (result.length === 3) {
    result.forEach((value) => {
      console.log(value);
    });
  }
}

function three() {
  http.get(url3, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      const res = data.toString();
      // console.log(res.length);
      result[2] = res;
      four();
      return true;
    }));
  });
}

function two() {
  http.get(url2, (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      const res = data.toString();
      // console.log(res.length);
      result[1] = res;
      three();
      return true;
    }));
  });
}

http.get(url1, (response) => {
  response.pipe(bl((err, data) => {
    if (err) {
      return console.error(err);
    }
    const res = data.toString();
    // console.log(res.length);
    // console.log(res);
    result[0] = res;
    two();
    return true;
  }));
});
