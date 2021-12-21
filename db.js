// sets up database connection and exports pool module to work with it
const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.POSTGRES_DBUSER,
  host: process.env.POSTGRES_DBHOST,
  database: process.env.POSTGRES_DBNAME,
  password: process.env.POSTGRES_DBPASS,
  port: process.env.POSTGRES_DBPORT,
  ssl: false,
};

const proConfig = {
  user: process.env.POSTGRES_DBUSER,
  host: process.env.POSTGRES_DBHOST,
  database: process.env.POSTGRES_DBNAME,
  password: process.env.POSTGRES_DBPASS,
  port: process.env.POSTGRES_DBPORT,
  ssl: { rejectUnauthorized: false },
};

console.log(proConfig);
console.log(`Do I use proConfig? ${process.env.NODE_ENV === "production"}`);

const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
