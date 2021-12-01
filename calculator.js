/* exported calculator */
const calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var difference = x - y;
    return difference;
  },
  multiply: function (x, y) {
    var product = x * y;
    return product;
  },
  divide: function (x, y) {
    var quotient = x / y;
    return quotient;
  },
  square: function (x) {
    var square = x * x;
    return square;
  },
  sumAll: function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
    return total;
  },
  getAverage: function (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
    var average = total / numbers.length;
    return average;
  }
};
// eslint-disable-next-line no-console
console.log(calculator);
