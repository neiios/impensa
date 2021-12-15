// sets up database connection and exports pool module to work with it
const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = `postgresql://${process.env.POSTGRES_DBUSER}:${process.env.POSTGRES_DBPASS}@${process.env.POSTGRES_DBHOST}:${process.env.POSTGRES_DBPORT}/${process.env.POSTGRES_DBNAME}`;

const proConfig = process.env.POSTGRESQLCONNSTR_DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = pool;
