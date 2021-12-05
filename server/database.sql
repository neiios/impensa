-- impensa database setup

CREATE DATABASE impensa;

\c impensa

-- extension is needed for uuid_generate_v4() to work
CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE expenses(
    expense_id SERIAL,
    expense_amount INTEGER,
    user_id UUID,
    PRIMARY KEY (expense_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)  
);

CREATE TABLE categories(
    category_id SERIAL,
    category_description VARCHAR(32),
    user_id UUID,
    PRIMARY KEY (category_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- create some test data for testing

INSERT INTO users (user_name, user_email, user_password) VALUES ('barbum', 'richard@impensa.studio', 'password');

INSERT INTO expenses (expense_amount, user_id) VALUES (15, '8566a88a-a2dc-4955-9717-bc3a6e993569');

INSERT INTO categories (category_description, user_id) VALUES ('Netflix', '8566a88a-a2dc-4955-9717-bc3a6e993569');