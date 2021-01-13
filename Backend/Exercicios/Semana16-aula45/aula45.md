## Exercicio 01

A- Deleta a coluna salary;

B- Irá alterar nome da coluna;

C- Irá alterar a quantidade de caracter que pode ser utilizada.

D- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercicio 02

A- UPDATE Actor
SET name = "Amanda Caetano",
birth_date="2021-01-12"
WHERE id = "003"

B- 
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

C-UPDATE Actor
SET name = "Mariana Ximenes",
salary = 500000,
birth_date= "1981-04-26",
gender= "female"
WHERE id = "005";

D- Ele não da erro e não executa o comando pois o ID não existe.

## Exercicio 03

A- DELETE FROM Actor WHERE id  = "004";

B-
DELETE FROM Actor WHERE gender = "male" AND salary >=1000000

## Exercicio 04

A-SELECT MAX(salary) FROM Actor;

B-SELECT MIN(salary) FROM Actor WHERE gender = "female";

C-SELECT COUNT(*) FROM Actor WHERE gender = "female";

D- SELECT SUM (salary)FROM Actor;

## Exercicio 05

A- Ele retorna a quantidade dos gêneros agrupados. Qantidade de male e female.

B-SELECT ID,NAME FROM Actor
ORDER BY name DESC ;

C-SELECT * FROM Actor
ORDER BY salary ;

D-SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

E-SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

## Exercicio 06

A-ALTER TABLE Movies
ADD playing_limit_date DATE ;

B-ALTER TABLE Movies
CHANGE rating rating FLOAT;

DESCRIBE Movies;

C-
UPDATE Movies
SET playing_limit_date = "1999-12-01" 
WHERE id = "003";

UPDATE Movies
SET playing_limit_date = "2021-02-10" 
WHERE id = "001";

D- Ele não retona erro mas como não existe o ID para reaizar UPDATE  ele não altera nada.

## Exercicio 07

A-
SELECT COUNT(*) FROM Movies
WHERE  rating >=7.5 ;

B- SELECT AVG(rating)FROM Movies;

C-SELECT COUNT(*) FROM Movies;

D-SELECT COUNT(*) FROM Movies
WHERE release_date>=CURRENT_DATE();

E-SELECT MAX(rating)FROM Movies;

F-SELECT MIN(rating)FROM Movies;

## Exercicio 08

A-
SELECT * FROM Movies
ORDER BY name  ;

B-SELECT * FROM Movies ORDER BY name DESC LIMIT 5;

C-
SELECT * FROM Movies
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

D-
SELECT * FROM Movies 
ORDER BY rating DESC 
LIMIT 3;

