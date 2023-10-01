const express = require('express');
const { Pool } = require('pg'); 

const app = express();

// Configure the database connection pool
const pool = new Pool({
    user: 'myuser',
    host: 'localhost', 
    database: 'mydatabase',
    password: 'mypassword',
    port: 5432,
  });
  

// Connect to the database
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database at', res.rows[0].now);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/', (req, res) => {
    res.status(200).send('Learning Node.js with Express');
})