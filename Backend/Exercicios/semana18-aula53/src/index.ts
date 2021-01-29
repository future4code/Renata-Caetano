import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import dotenv from 'dotenv'
import knex from 'knex'
import createUser from './endpoits/createUser';
import login from './endpoits/login';
import getUserByToken from './endpoits/getUserByToken';
dotenv.config()

const app: Express = express();

app.use(express.json());
app.use(cors());



export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})

app.post('/user/signup',createUser) //cadastro
app.post("/user/login",login) //login

app.get('/user/token', getUserByToken)//achar usuário pelo token


console.log (process.env.DB_USER);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});