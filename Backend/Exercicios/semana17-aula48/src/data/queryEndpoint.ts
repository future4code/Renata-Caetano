import { connection } from './../index';


export default async function selectAllUsers(req:Request,res:Response):Promise<any> {
    const {name} = req.params as await connection.raw (`
       SELECT id, name, email, type,
       FROM aula48_exercicio,
       LIKE "%${name}%"

    `)
 
    return result[0]
 }