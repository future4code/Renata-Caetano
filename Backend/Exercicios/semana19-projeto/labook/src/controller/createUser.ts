import { Request, Response } from "express";
import { generateToken } from "../business/services/authenticator";
import { hash } from "../business/services/hashManager";
import { generateId } from "../business/services/idGenerator";
import insertUser from "../data/insertUser";

export default async function createUser (
    req: Request, 
    res: Response) {
    
      try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       if (
          !name || 
          !email||
          !password
          ) {
          res.statusCode = 406
          message = '"name", "email" and "password" must be provided'
          throw new Error(message)
       }
 
       const id: string = generateId()
 
       const cypherPassword = await hash (password);
 
       await insertUser(
             id,
             name,
             email,
             cypherPassword
          )
 
       const token: string = generateToken({ id })
 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 }
 