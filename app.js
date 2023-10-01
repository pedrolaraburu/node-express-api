const express = require('express');
const pool = require('./src/settings/db');
const routes = require('./src/routes/users');

const app = express();

app.use(express.json());

// Testing connection to the database
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database at', res.rows[0].now);
  }
});

const port = process.env.PORT || 8000;

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
