// sets up database connection and exports pool module to work with it

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: "5432",
  database: "impensa",
});

module.exports = pool;
