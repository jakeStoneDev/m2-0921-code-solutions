const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', function (req, res) {
  const newArray = [];
  for (const key in grades) {
    newArray.push(grades[key]);
  }
  res.json(newArray);
});

app.delete('/api/grades/:id', (req, res, next) => {
  const id = req.params.id;
  delete grades[id];
  res.status(204).send();
});

app.listen(3000, () => {
  // console.log('Loud and clear, 3000');
});
