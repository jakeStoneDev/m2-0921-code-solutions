const fs = require('fs');

if (process.argv[2].toString() === 'read') {
  fs.readFile('data.json', 'utf-8', function read(err, data) {
    if (err) {
      throw err;
    }
    const content = JSON.parse(data);
    for (var key in content.notes) {
      console.log(`${key}: ${content.notes[key]}`);
    }
  });
}
