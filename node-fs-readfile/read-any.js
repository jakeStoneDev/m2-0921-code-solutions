const fs = require('fs');
const fileName = process.argv[2];
// First I want to read the file
fs.readFile(fileName, 'utf-8', function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;

  console.log(content);
});
