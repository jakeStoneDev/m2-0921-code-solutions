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

const operation = {
  add: false,
  subtract: false,
  divide: false,
  multiply: false
};

if (operand === 'plus') {
  operation.add = true;
  operation.subtract = false;
  operation.divide = false;
  operation.multiply = false;
} else if (operand === 'minus') {
  operation.add = false;
  operation.subtract = true;
  operation.divide = false;
  operation.multiply = false;
} else if (operand === 'over') {
  operation.add = false;
  operation.subtract = false;
  operation.divide = true;
  operation.multiply = false;
} else if (operand === 'times') {
  operation.add = false;
  operation.subtract = false;
  operation.divide = false;
  operation.multiply = true;
}

if (operation.add === true) {
  add(param1, param2);
} else if (operation.subtract === true) {
  subtract(param1, param2);
} else if (operation.multiply === true) {
  multiply(param1, param2);
} else if (operation.divide === true) {
  divide(param1, param2);
}
