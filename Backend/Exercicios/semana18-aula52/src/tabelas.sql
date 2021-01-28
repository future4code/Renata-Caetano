CREATE TABLE to_do_list_user (
	id INT AUTO_INCREMENT  PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(10)  NOT NULL ,
    role VARCHAR (10)
);

SELECT * FROM to_do_list_user;



CREATE TABLE address_user
(cep int (100) NOT NULL ,
numero INT NOT NULL ,
complemento VARCHAR (50) ,
user_id VARCHAR (255),
FOREIGN KEY (user_id) REFERENCES to_do_list_users(id)
);

DROP TABLE  to_do_list_users;
DROP TABLE  ADDRESS_USER;

SELECT * FROM to_do_list_users;