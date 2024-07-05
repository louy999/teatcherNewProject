/* Replace with your SQL commands */
CREATE TABLE chapter(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(500) UNIQUE NOT NULL
);