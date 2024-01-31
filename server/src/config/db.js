const dotenv = require("dotenv");
dotenv.config();

const Pool = require("pg").Pool;

const pool = new Pool({
  dialect: "postgres",
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  ssl: {
    require: true,
    rejectUnauthorized: false, // For development, you may want to remove it in production
  },
});

async function getPostgresVersion() {
  const client = await pool.connect();
  try {
    const response = await client.query('SELECT version()');
    console.log(response.rows[0]);
  } finally {
    client.release();
  }
}

getPostgresVersion();

module.exports = pool;
