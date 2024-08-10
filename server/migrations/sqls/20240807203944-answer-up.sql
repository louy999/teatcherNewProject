/* Replace with your SQL commands */
CREATE TABLE answer(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    student_id uuid REFERENCES student(id) NOT NULL,
    lesson_id uuid REFERENCES lesson(id) NOT NULL,
    exam_id uuid REFERENCES exam(id) NOT NULL,
    choices VARCHAR(200) NOT NULL
);