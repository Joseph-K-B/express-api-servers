DROP TABLE IF EXISTS randomtrivia;

CREATE TABLE randomtrivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    -- answer_type VARCHAR(256),
    difficulty VARCHAR(256) NOT NULL,
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
    -- incorrect_answer VARCHAR(512) NOT NULL
);

INSERT INTO randomTrivia (category, difficulty, question, answer)
    VALUES ('category one', 'difficulty one', 'question one', 'answer one')

-- DROP TABLE IF EXISTS randomTrivia;



