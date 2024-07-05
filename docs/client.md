# client

- exam

  - ERD sql
    | sql | type  
    |:-----|:--------:
    | id | uuid
    | date | date  
    | title | text
    | lessonId | uuid
    | description | text
    | image | text
    | video | text
    | choices | text[]
    | answer | text

- degree
  - ERD sql
    | sql | type  
    |:-----|:--------:
    | id | uuid
    | date | date  
    | degree | number
    | lessonId | uuid
    | studentId | uuid
