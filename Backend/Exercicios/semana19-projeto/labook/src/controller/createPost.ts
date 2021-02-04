import { connection } from "../data/connection"
import { Request, Response } from "express";
import { AuthenticationData } from "../business/entities/user";
import { getTokenData } from "../business/services/authenticator";
import { generateId } from "../business/services/idGenerator";


export default async function createPost (
    req: Request, 
    res: Response){
    try {
       let message = "Success!"
 
       const { photo, description, type } = req.body
 
       const token: string = req.headers.authorization as string
 
       const tokenData: AuthenticationData = getTokenData(token)
 
       const id: string = generateId()
 
       await connection("labook_posts")
          .insert({
             id,
             photo,
             description,
             type,
             author_id: tokenData.id
          })
 
       res.status(201).send({ message })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }