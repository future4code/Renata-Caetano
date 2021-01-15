//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { BADQUERY } from 'dns';
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

export type User = {
    id: number,
    name: string,
    cpf:string,
    bday:string,
    }

export type Account={
    Client:User,
    type:AccountType,
    transactions:Transaction[],
    balance:number,
}
export type Transaction={
   value:number,
   date:number,
   description:string
}
enum AccountType{
    CONTACORRENTE="ContaCorrente",
    CONTAPOUPANCA="ContaPoupança"
}
enum TransType{
    TED="TED",
    PIX="PIX",
    DOC="DOC",
    BOLETO="BoletoBancario",
    CODIGODEBARRAS="CodigoDeBarras"
}

let users: User[] = [
    {
        id: 1,
        name: "Renata",
        cpf:"101.112.131-41",
        bday:"09/07/1987",
        //type:AccountType.CONTAPOUPANCA,
        //transaction:TransType.BOLETO,
       // balance:0,
    },
    {
        id: 2,
        name: "Jean",
        cpf:"101.112.131-42",
        bday:"05/05/1987",
       // type:AccountType.CONTACORRENTE,
        //transaction:TransType.PIX,
        //balance:0
    },
    {
        id: 3,
        name: "Pedro",
        cpf:"101.112.131-43",
        bday:"03/04/1987",
       // type:AccountType.CONTAPOUPANCA,
       // transaction:TransType.TED,
        //balance:0,
    },
    {
        id: 4,
        name: "Felipe",
        cpf:"101.112.131-44",
        bday:"01/01/1987",
       // type:AccountType.CONTAPOUPANCA,
       // transaction:TransType.DOC,
       // balance:0,
    },
        ]

app.get("/user/all", (req: Request, res: Response) =>{
    res.status(200).send(users)
})
app.post("/users", (req: Request, res: Response) =>{
    let errorCode:number=400;
    try{
        const reqBody:User={
           id: Date.now(),
            name: req.body.name,
            cpf:req.body.cpf,
            bday:req.body.bday,
         // type:req.body.type,
         // transaction:req.body.transaction,
         // balance:req.body.balance
        }
        if(!reqBody.name || !reqBody.cpf || !reqBody.bday){
            errorCode = 422;
            throw new Error("Existem campos inválidos. Preencha corretamente.");
        }
       

        users.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
