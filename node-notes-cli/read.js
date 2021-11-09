const fs = require('fs');
// First I want to read the file
fs.readFile('data.json', 'utf-8', function read(err, data) {
  if (err) {
    throw err;
  }
  const content = data;

  console.log(content);
});
