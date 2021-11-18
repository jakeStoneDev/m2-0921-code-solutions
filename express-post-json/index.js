const express = require('express');
const app = express();

var nextId = 1;
var grades = {};

app.post(' / api / grades', function (res, req) {
  res.status(204).send();
});

app.listen(3000, () => {
  console.log('listening 3000');
});

app.use(express.json());
