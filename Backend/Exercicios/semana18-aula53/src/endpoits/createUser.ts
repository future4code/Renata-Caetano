import { hash } from './../service/hashManager';
import { generateId } from './../service/idGenerator';
import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from '../service/authenticator';

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
         if (!req.body.name) 
         {
            throw new Error("Invalid name");
          }
         
        if (!req.body.email || req.body.email.indexOf("@") === -1)
        {
              throw new Error("Invalid email");
            }
             if(!req.body.password || req.body.password.length < 6) {
              throw new Error("Invalid password");
            }
      
            // const userData = {
            //   name:req.body.name,  
            //   email: req.body.email,
            //   password: req.body.password,
            // };
        
            const id: string = generateId();
            const cypherPassword = await hash(req.body.password);
          
            await insertUser (
                id, 
                req.body.name,
                req.body.email,
                cypherPassword,
                );
        
                const token: string = generateToken({
                    id,
                    
                 })
        
                res
                    .status(201)
                    .send({
                       message:"Usuário criado!",
                       token
                    })
        
            } catch (error) {
                res.status(400).send({
                    message: error.message || error.sqlMessage
                })
            }
        }