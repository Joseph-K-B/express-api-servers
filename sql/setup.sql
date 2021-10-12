DROP TABLE IF EXISTS random_trivia;

CREATE TABLE random_trivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256),
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
);



DROP TABLE IF EXISTS cs_trivia;

CREATE TABLE cs_trivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256),
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
);



DROP TABLE IF EXISTS animal_trivia;

CREATE TABLE animal_trivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256),
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
);



DROP TABLE IF EXISTS history_trivia;

CREATE TABLE history_trivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256),
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
);


DROP TABLE IF EXISTS general_trivia;


CREATE TABLE general_trivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256),
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
);



INSERT INTO random_trivia (
    category, 
    difficulty, 
    question,
    answer) 
  VALUES ('Geography', 'easy', 'What city is built on two continents?', 'Istanbul');



INSERT INTO cs_trivia (
    category, 
    difficulty, 
    question,
    answer) 
  VALUES ('Science: Computers', 'easy', 'Who invented JavaScript?', 'Marty Nelson');



  INSERT INTO animal_trivia (
    category, 
    difficulty, 
    question,
    answer) 
  VALUES ('Animal', 'hard', 'What is the collective noun for rats?', 'Mischief');



 INSERT INTO history_trivia (
    category, 
    difficulty, 
    question,
    answer) 
  VALUES ('History', 'easy', 'What year was the Guy Fawkes Gunpowder Plot?', '1605');



  INSERT INTO general_trivia (
    category, 
    difficulty, 
    question,
    answer) 
  VALUES ('General', 'easy', 'Whats the hex value for blue?', '#0000FF');