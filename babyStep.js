function calSum(arg) {
  // const input = process.argv.slice(2);
  const input = arg.slice();
  for (let i = 0; i < input.length; i += 1) {
    if (Number.isNaN(Number.parseFloat(input[i]))) {
      return false;
    }
    input[i] = Number.parseFloat(input[i]);
  }
  const reducer = (sum, value) => sum + value;
  const sum = input.reduce(reducer);
  console.log(sum);
  return sum;
}

// calSum();

module.exports = calSum;
