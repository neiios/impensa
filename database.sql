-- HOW TO SETUP DATABASE FOR IMPENSA

-- create .env file in root directory with contents:
POSTGRES_DBUSER = postgres
POSTGRES_DBPASS = password
POSTGRES_DBHOST = localhost
POSTGRES_DBPORT = 5432
POSTGRES_DBNAME = impensa
jwtSecret = "barbim"

-- install postgres

-- create database
CREATE DATABASE impensa;

-- connect to the database
\c impensa

-- extension is needed for uuid_generate_v4() to work
CREATE extension IF NOT EXISTS "uuid-ossp";

-- create users table
CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_currency VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

-- create expenses table
CREATE TABLE expenses(
  expense_id UUID DEFAULT uuid_generate_v4(),
  expense_amount NUMERIC NOT NULL,
  expense_description VARCHAR(255) NOT NULL,
  expense_category VARCHAR(255) NOT NULL,
  expense_date timestamptz NOT NULL DEFAULT now(),
  user_id UUID,
  PRIMARY KEY (expense_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)  
);

-- INSERT INTO users (user_name, user_email, user_currency, user_password) VALUES ('barbum', 'richard@impensa.studio', '₹', '$2b$10$4evqnUHm2yzANBHw18mM2.HBl8aTk6g1./Lhr3XxyTTqizRkCihYW');

-- INSERT INTO expenses (expense_amount, expense_description, expense_category, user_id) VALUES ('11.65','here is a short description', 'category for the expense', '765c1420-161d-47aa-8c44-5cf855e8e169');