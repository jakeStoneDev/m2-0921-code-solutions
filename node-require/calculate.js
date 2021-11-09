const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const argv = process.argv;
if (argv.length > 2) {
  var param1 = argv[2];
  var operand = argv[3];
  var param2 = argv[4];
} else {
  console.log('Enter numbers');
}

if (operand === 'plus') {
  add(param1, param2);
} else if (operand === 'minus') {
  subtract(param1, param2);
} else if (operand === 'over') {
  divide(param1, param2);
} else if (operand === 'times') {
  multiply(param1, param2);
}
