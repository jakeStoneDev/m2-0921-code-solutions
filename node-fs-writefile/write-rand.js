const fs = require('fs');

var num1;
var str;
function getRandomInt(max) {
  num1 = Math.floor(Math.random() * max);
  str = num1.toString();
}

getRandomInt(100000);

/* eslint-disable no-console */
fs.writeFile('random.txt', str, 'utf8', err => {
  if (err) throw err;
  console.log(str);
});
