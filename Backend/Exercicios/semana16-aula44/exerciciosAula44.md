### EXERCICIO 1

`USE `dumont-renata-caetano`

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

SHOW DATABASES
SHOW TABLES
DESCRIBE Actor`

A-VARCHAR é um campo que pode receber números e letras e o numero entre () é a quantidade de caracter que pode receber;
PRIMARY KEY é a chave de identificador único;
NOT NULL é um campo que não pode ficar em branco.
DATE representa uma data (YYYY-MM-DD).

B-SHOW DATABASES irá projetar na tela as data base criadas ;
SHOW TABLES irá projetar na tela a lista de tabelas criadas na Datat Base sendo utilizada.

C-DESCRIBE Actor irá descrever a tabela selecionada e ja criada como exemplo chamado "Actor ",ele mostraa tabela está criada.


### EXERCICIO 2
A-INSERT INTO Actor (id, name, salary, birth_date,gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

B-Este erro está acusando que a chave primária 002 já existe e não pode ter duas chaves iguais.

C-  A quantidade de informações para serem adicionadas nao correspondem com a quantidade informada como parâmetro.
Falta adicionar como parâmetro a data de aniversário e gênero.

D-O campo nome não pode ser nulo e por isso precisa entrar no parâmetro e ser colocado como informação.

E-Faltou aspas na data de aniversário.

F-INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Rodrigo",
 5000.50,
  "1985-01-25", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Amanda",
 3500.50,
  "1991-11-22", 
  "female"
);


### EXERCICIO 3

A- SELECT * FROM  Actor WHERE gender = "female";

B-SELECT name,salary from Actor WHERE name = "Tony Ramos";

C-Ele retorna todos os campos NULL porque não existem gêneros salvos como invalid, e tamém não deixara realizar inclusão pois limitamos o espaço para 6 caracteres e "invalid" possui 7.

D- SELECT id, name, salary from Actor WHERE salary <= 500000;

E- Não existe coluna chamada NOME e sim NAME, é só corrigir a escrita.
SELECT id, name from Actor WHERE id = "002";

### EXERCICIO 4

A-Para realizar duas operações ou mais, dividimos as mesmas dentro de ()parênteses para que cada operação seja realizada separadamente.
Primeiro ele comprara se a letra começa com A ou J e só depois pega essa informação e verifica com a segunda solicitação do salário por exemplo.
se as duas informações forem TRUE ele retora a resposta.

B-SELECT * FROM Actor
WHERE (name NOT LIKE "A%" ) AND salary > 350000

C-SELECT * FROM Actor
WHERE name LIKE "%G%"  AND name LIKE "%g%" ;

D-SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE  "%A%")AND salary between 350000 AND 900000;


### EXERCICIO 5

A-CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT(300) NOT NULL,
    release_date DATE NOT NULL,
    evaluation INT NOT NULL
	);

B-INSERT INTO Movies (id, name, synopsis, release_date,evaluation)
VALUES(
  "001", 
  "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
"7"
);

C-INSERT INTO Movies (id, name, synopsis, release_date,evaluation)
VALUES(
  "002", 
  "Doce de mãe",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com elas",
  "2012/12/27", 
"10"
);

D-INSERT INTO Movies (id, name, synopsis, release_date,evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
"8"
);

E-INSERT INTO Movies (id, name, synopsis, release_date,evaluation)
VALUES(
  "004", 
  "Minha Mãe é uma Peça 3",
 "Dona Hermínia vai ter que se redescobrir e se reinventar porque seus filhos estão formando novas famílias. Essa supermãe vai ter que segurar a emoção para lidar com um novo cenário de vida: Marcelina está grávida e Juliano vai casar. Para completar, Carlos Alberto, seu ex-marido, que esteve sempre por perto, agora resolve ficar ainda mais próximo.",
  "2019/12/26", 
"10"
);


### EXERCICIO 6
A-SELECT id, name, evaluation from Movies WHERE id= 04

B-SELECT * from Movies WHERE name= "Dona Flor e Seus Dois Maridos";

C-SELECT id, name, synopsis from Movies WHERE evaluation >= 07;

### EXERCICIO 7

A-SELECT * FROM Movies WHERE name LIkE %vida%;

B-SELECT * FROM Movies WHERE name LIKE %a% OR synopsis LIKE %a%;

C-SELECT * FROM Movies WHERE release_date < 2021/01/10;

D- SELECT * FROM Movies WHERE release_date < CURDATE AND (name LIKE %termo-de-busca% OR synopsis LIKE %termo-de-buca%) AND evaluation > 7
