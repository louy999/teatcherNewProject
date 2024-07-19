/* Replace with your SQL commands */
CREATE TABLE parent(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(200),
    phone VARCHAR(250) UNIQUE,
    password VARCHAR(250),
    student_id UUID REFERENCES student(id) UNIQUE
);