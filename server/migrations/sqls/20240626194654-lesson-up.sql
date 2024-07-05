/* Replace with your SQL commands */
CREATE TABLE lesson(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(500),
    img VARCHAR(500),
    price VARCHAR(250),
    video VARCHAR(500),
    file text [],
    chapter_id UUID REFERENCES chapter(id),
    view VARCHAR(200)
);