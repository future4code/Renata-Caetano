CREATE TABLE create_user_cookenu (
	id VARCHAR (255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    email VARCHAR(255) NOT NULL UNIQUE ,
    password VARCHAR(100)  NOT NULL 
    );

    DROP TABLE create_user_cookenu;

    SELECT * FROM create_user_cookenu;