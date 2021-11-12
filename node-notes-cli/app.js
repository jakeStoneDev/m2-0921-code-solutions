const fs = require('fs');

// Read
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

// Create
if (process.argv[2].toString() === 'create') {
  fs.readFile('data.json', 'utf-8', function read(err, data) {
    if (err) {
      throw err;
    }
    const content = JSON.parse(data);
    const thisKey = content.nextId;
    content.nextId = thisKey + 1;
    var value;
    value = process.argv[3];
    console.log('Added.');
    Object.assign(content.notes, { [thisKey]: value });
    const contentStri = JSON.stringify(content, null, 2);
    fs.writeFileSync('data.json', contentStri);
  });
}

// Delete
if (process.argv[2].toString() === 'delete') {
  fs.readFile('data.json', 'utf-8', function read(err, data) {
    if (err) {
      throw err;
    }

    var errorPrint = false;

    const content = JSON.parse(data);
    for (var key in content.notes) {
      if (key !== process.argv[3]) {
        errorPrint = true;
      }
      if (key === process.argv[3]) {
        var keyMatch = key.toString();
        delete content.notes[keyMatch];
        console.log('Deleted.');
        errorPrint = false;
        const contentStri = JSON.stringify(content, null, 2);
        fs.writeFileSync('data.json', contentStri);
        return;
      }
    }
    if (errorPrint === true) {
      console.log('This key does not match our records');
      errorPrint = false;
    }
  });
}

// Update
if (process.argv[2].toString() === 'update') {
  fs.readFile('data.json', 'utf-8', function read(err, data) {
    if (err) {
      throw err;
    }
    var errorPrint = false;
    const content = JSON.parse(data);
    for (var key in content.notes) {
      if (key !== process.argv[3]) {
        errorPrint = true;
      }
      if (key === process.argv[3]) {
        var keyMatch = key.toString();
        content.notes[keyMatch] = process.argv[4];
        console.log('Updated.');
        const contentStri = JSON.stringify(content, null, 2);
        fs.writeFileSync('data.json', contentStri);
        return;
      }
    }
    if (errorPrint) {
      console.log('This key does not match our records');
      errorPrint = false;
    }
  });
}
