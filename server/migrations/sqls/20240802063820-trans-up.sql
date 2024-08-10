/* Replace with your SQL commands */
CREATE TABLE trans(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    student_id UUID REFERENCES student(id),
    lesson_id UUID REFERENCES lesson(id),
    chapter_name VARCHAR(500) REFERENCES chapter(name),
    price VARCHAR(250)
);