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

if (process.argv[2].toString() === 'create') {
  fs.readFile('data.json', 'utf-8', function read(err, data) {
    if (err) {
      throw err;
    }
    const content = JSON.parse(data);
    console.log('content:', content);

    const thisKey = content.nextId;
    content.nextId = thisKey + 1;
    console.log(content.nextId);
    const value = process.argv[3];
    Object.assign(content.notes, { [thisKey]: value });

    var contentStri = JSON.stringify(content);
    fs.writeFileSync('data.json', contentStri);
  });
}
