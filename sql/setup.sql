DROP TABLE IF EXISTS randomtrivia;

CREATE TABLE randomtrivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256) NOT NULL,
    question VARCHAR(512) NOT NULL,
    answer VARCHAR(512) NOT NULL
);


DROP TABLE IF EXISTS cstrivia;

CREATE TABLE cstrivia (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category VARCHAR(512) NOT NULL,
    difficulty VARCHAR(256) NOT NULL,
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


