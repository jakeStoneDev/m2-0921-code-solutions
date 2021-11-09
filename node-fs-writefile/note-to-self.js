const fs = require('fs');

const data = process.argv[2].toString();

/* eslint-disable no-console */
fs.writeFile('note.txt', data, 'utf-8', err => {
  if (err) { console.log(err); } else {
    console.log(data);
  }
});
