### EXERCICIO 01
A- Eu concordo que string se torna mais seguro do que o number pois acredito que seja mais seguro misturar letras,numeros e caracters.

### EXERCICIO 02

const userTableName = "User"; /// --> UMA CONSTANTE CRIADA QUE REFERENCIA A TABELA CRIADA NO BANCO CHAMADA USER

const connection = knex({ /////-->REALIZA CONEXAO COM O BD
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
}; ///--->  CRIA FUNÇÃO QUE IRA INSERIR DADOS NA TABELA 

### EXERCICIO 03

A-  o valor que vem do dotenv é um valor string ou underfined e a função sign espera um valor definido e por isso usamos "as string" para dizer que o valor é definido, ou seja ,forçar código a olhar para este valor como definido.


