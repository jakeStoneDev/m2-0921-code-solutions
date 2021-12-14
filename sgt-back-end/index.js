const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.listen(3000);
app.use(express.json());
app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
        res.end();
        return;
      }
      if (!result.rows[0]) {
        res.status(404).send('404 Id not found');
        res.end();
      } else {
        res.json(grade[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', function (req, res) {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      if (!grade) {
        res.status(404).json({
          error: 'Cannot find grades'
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', function (req, res) {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const numScore = parseInt(score);
  const text = 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) RETURNING *';
  const values = [name, course, score];

  if (!name) {
    res.status(400).send('Name is required');
    res.end();
    return;
  }
  if (!course) {
    res.status(400).send('Course is required');
    res.end();
    return;
  }
  if (!score) {
    res.status(400).send('Score is required');
    res.end();
    return;
  }
  if (numScore < 0 || numScore > 100) {
    res.status(400).send('Score must be between 0 and 100');
    res.end();
    return;
  }

  db.query(text, values, (err, result) => {
    if (err) {
      res.status(500).send('An unexpected error occurred');
      res.end();
      return;
    }
    res.status(201);
    res.json(result.rows[0]);

  });
});

app.put('/api/grades/:gradeId', function (req, res) {
  const gradeId = req.params.gradeId;
  const gradeIdNum = Number(req.params.gradeId);
  if (!Number.isInteger(gradeIdNum) || gradeIdNum <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  const numScore = parseInt(score);
  const text = 'UPDATE grades SET name = $1, course = $2, score= $3 WHERE gradeId = $4 returning *';
  const values = [name, course, score, gradeId];

  if (!name) {
    res.status(400).send('Name is required');
    res.end();
    return;
  }
  if (!course) {
    res.status(400).send('Course is required');
    res.end();
    return;
  }
  if (!score) {
    res.status(400).send('Score is required');
    res.end();
    return;
  }
  if (numScore < 0 || numScore > 100) {
    res.status(400).send('Score must be between 0 and 100');
    res.end();
    return;
  }

  db.query(text, values, (err, result) => {
    if (err) {
      res.status(500).send('An unexpected error occurred');
      res.end();
      return;
    }
    if (!result.rows[0]) {
      res.status(404).send('404 Id not found');
      res.end();
      return;
    }
    res.status(200);
    res.json(result.rows[0]);
  });
});

app.delete('/api/grades/:gradeId', function (req, res) {
  const gradeId = req.params.gradeId;
  const gradeIdNum = Number(req.params.gradeId);
  if (!Number.isInteger(gradeIdNum) || gradeIdNum <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    res.end();
  }
  const text = 'DELETE FROM "grades" WHERE gradeId = $1 returning *';
  const values = [gradeId];

  db.query(text, values, (err, result) => {
    if (err) {
      res.status(500).send('An unexpected error occurred');
      res.end();
      return;
    }
    if (!result.rows[0]) {
      res.status(404).send('404 Id not found');
      res.end();
      return;
    }
    res.status(204).send();
  });
});
