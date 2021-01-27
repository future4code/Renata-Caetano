import {Request, Response } from 'express';
import { generateToken } from '../service/autenticator';
import { generateId } from '../service/idGenerator';
import insertUser from './../data/insertUser';

export default async function createUser(
    req:Request,
    res:Response
)
    {
        try{

if (!req.body.email || req.body.email.indexOf("@") === -1)
  {
        throw new Error("Invalid email");
      }
       if(!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }

      const userData = {
      
        email: req.body.email,
        password: req.body.password,
      };
  
      const id = generateId();
  
    
      await insertUser(id,userData.email, userData.password);
  
      const token = generateToken(id);
            res
            .status(200)
            .send( {token,});
    
    }catch (error){
        res.status(400).send({
            messsage:error.message || error.sqlMessage //se for um erro comum ele mostra a 1 msg e se for do sql ele mostra a 2
        })
    }
    
    }