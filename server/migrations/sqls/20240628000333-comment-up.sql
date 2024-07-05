/* Replace with your SQL commands */
CREATE TABLE comment(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(500),
    student uuid REFERENCES student(id),
    username VARCHAR(200),
    lesson_id uuid REFERENCES lesson(id)
);