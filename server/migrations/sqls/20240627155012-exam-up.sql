/* Replace with your SQL commands */
CREATE TABLE exam(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    title VARCHAR(200),
    lesson_id UUID REFERENCES lesson(id) NOT NULL,
    description VARCHAR(500),
    image VARCHAR(500),
    video VARCHAR(500),
    choices text [],
    answer VARCHAR(200),
    done BOOLEAN
);