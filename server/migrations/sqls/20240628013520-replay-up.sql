/* Replace with your SQL commands */
CREATE TABLE replay(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(500) NOT NULL,
    student uuid REFERENCES student(id) NOT NULL,
    username VARCHAR(200) NOT NULL,
    comment_id uuid REFERENCES comment(id) NOT NULL
);