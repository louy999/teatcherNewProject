/* Replace with your SQL commands */
CREATE TABLE parent(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(200) NOT NULL,
    phone VARCHAR(250) UNIQUE NOT NULL,
    password VARCHAR(250) NOT NULL,
    imgprofile VARCHAR(500),
    student_id TEXT [] NOT NULL
);