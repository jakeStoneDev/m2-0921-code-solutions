const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());

// User can get an array of notes
app.get('/api/notes', function (req, res) {
  const arr = [];
  fs.readFile('./data.json', function (err, data) {
    if (err) { res.status(500).send('Something went wrong'); }
    data = JSON.parse(data);
    for (const keys in data.notes) {
      arr.push(data.notes[keys]);
    }
    res.json(arr);
  });
});

// User can GET a single note by id
app.get('/api/notes/:id', function (req, res) {
  // if (!isNaN(parseInt(req.params.id))) { res.status(400).send('Bad Request'); }
  const Id = parseInt(req.params.id);
  if (isNaN(Id) || Id <= 0) {
    res.status(400).send('Bad Request');
  } else {
    fs.readFile('./data.json', 'utf8', function (err, data) {
      if (err) { res.status(404).send('This note does not exist'); }
      data = JSON.parse(data);
      if (data.notes[Id] === undefined) {
        res.status(404).send('This note does not exist');
      } else if (data.notes[Id].id === Id) {
        res.status(200);
        res.json(data.notes[Id]);
      }
    });
  }
});

// User can create a new note
app.post('/api/notes', function (req, res) {
  fs.readFile('data.json', function (err, data) {
    if (err) {
      res.status(500).send('An unexpected error occurred.');
      res.end();
    }
    const newObj = req.body;
    if (!newObj.content) {
      res.status(400).send('All posts must include content');
    }
    data = JSON.parse(data);
    const thisKey = data.nextId;
    newObj.id = thisKey;
    data.nextId = thisKey + 1;

    const value = newObj;
    Object.assign(data.notes, { [thisKey]: value });
    const dataStr = JSON.stringify(data, null, 2);
    fs.writeFile('./data.json', dataStr, err => {
      if (err) throw err;
      res.status(201);
      res.json(newObj);
    });
  });
});

// User can DELETE a single note
app.delete('/api/notes/:id', function (req, res) {
  const Id = parseInt(req.params.id);
  fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) { res.status(404).send('This note does not exist'); }
    data = JSON.parse(data);
    if (data.notes[Id] === undefined) {
      res.status(404).send('This note does not exist');
    } else if (data.notes[Id].id === Id) {
      res.status(200);
      delete data.notes[Id];
      const dataStr = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataStr, err => {
        if (err) { res.status(500).send('An unexpected error occurred.'); }
      });
      res.json(res.body);
    }
  });
});

// User can replace a note (PUT) by id
app.put('/api/notes/:id', function (req, res) {
  const Id = parseInt(req.params.id);
  fs.readFile('./data.json', 'utf8', function (err, data) {
    if (err) { res.status(404).send('This note does not exist'); }
    data = JSON.parse(data);
    if (data.notes[Id] === undefined) {
      res.status(404).send('This note does not exist');
    } else if (data.notes[Id].id === Id) {
      res.status(200);
      data.notes[Id].content = req.body.content;
      res.send(data.notes[Id]);
      const dataStr = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', dataStr, err => {
        if (err) { res.status(500).send('An unexpected error occurred.'); }
      });
    }
  });
});

app.listen(3000);
