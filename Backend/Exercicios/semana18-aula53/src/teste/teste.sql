CREATE TABLE create_user_cookenu (
	id VARCHAR (255) PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    email VARCHAR(255) NOT NULL UNIQUE ,
    password VARCHAR(100)  NOT NULL
    );

    DROP TABLE to_do_recipes_cookenu ;

    SELECT * FROM create_user_cookenu;
    SELECT * FROM to_do_recipes_cookenu;


CREATE TABLE to_do_recipes_cookenu (
id VARCHAR (255) PRIMARY KEY, 
title VARCHAR(255)  NOT NULL, 
description VARCHAR(255) NOT NULL ,
user_id VARCHAR (255), 
date DATE NULL ,
FOREIGN KEY (user_id)REFERENCES create_user_cookenu(id)
    );


