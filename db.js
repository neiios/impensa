// sets up database connection and exports pool module to work with it
const Pool = require("pg").Pool;
require("dotenv").config();

const config = {
  user: process.env.POSTGRES_DBUSER,
  host: process.env.POSTGRES_DBHOST,
  database: process.env.POSTGRES_DBNAME,
  password: process.env.POSTGRES_DBPASS,
  port: process.env.POSTGRES_DBPORT,
};

const pool = new Pool(config);

module.exports = pool;
