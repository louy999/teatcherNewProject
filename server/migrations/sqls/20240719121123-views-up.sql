/* Replace with your SQL commands */
CREATE TABLE views(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    student_id UUID REFERENCES student(id),
    lesson_id UUID REFERENCES lesson(id)
);