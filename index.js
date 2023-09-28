// Import the Express.js module
const express = require('express');

// Create an instance of the Express application
const app = express();

// app.use(cors());

const pool = require('./DB/db_connection');

// Define a route that responds with "Hello, Express!" when accessed
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, result) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result.rows);
    }
  });
});


// Start the Express server and listen on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
