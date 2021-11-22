const express = require('express');
const app = express();

app.use(express.json());

var nextId = 1;
var arr = [];

app.get('/api/grades', (req, res) => {
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  res.status(201);
  let obj = {};
  obj = req.body;
  obj.nextId = nextId;
  nextId++;
  arr.push(obj);
  res.json(obj);
});

app.listen(3000, () => {
  // console.log('beep boop 3000');
});
