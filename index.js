const express = require('express');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(express.json());

const pool = require('./DB/db_connection');

// Display users
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

// Add user
app.post('/add-user', async(req, res) => {
  try {
    const { firstname, lastname, age, job } = req.body;

    const query = `
      INSERT INTO users (firstname, lastname, age, job)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;

    const values = [firstname, lastname, age, job];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a user by ID
app.put('/update-user/:id', async (req, res) => {
  const userId = req.params.id;
  const { firstname, lastname, age, job } = req.body;

  try {
    const query = `
      update users
      set firstname = $1, lastname = $2, age = $3, job = $4
      where id = $5
      RETURNING *;`;

    const values = [firstname, lastname, age, job, userId];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a user by ID
app.delete('/delete-user/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const client = await pool.connect();
    const deleteQuery = 'DELETE FROM users WHERE id = $1';
    const result = await client.query(deleteQuery, [userId]);
    client.release();

    if (result.rowCount === 1) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
