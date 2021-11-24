const express = require('express');
const app = express();

const fs = require('fs');

app.use(express.json());

app.get('/api/notes/:id', function (req, res, next) {
  const Id = parseInt(req.params.id);
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
});

app.get('/api/notes', function (req, res) {
  const arr = [];
  fs.readFile('data.json', function (err, data) {
    if (err) throw err;
    data = JSON.parse(data);
    for (const keys in data.notes) {
      arr.push(data.notes[keys]);
    }
    res.json(arr);
  });
});

app.post('/api/notes', function (req, res) {

});

app.listen(3000, () => {
  // console.log('beep boop 3000');
});
