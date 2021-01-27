CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);


SHOW TABLES;
DESCRIBE User;

INSERT INTO User (id,email,password) VALUES
("2",
"teste@teste.com",
"Renata123");