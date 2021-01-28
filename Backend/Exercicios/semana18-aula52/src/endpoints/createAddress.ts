import { generateId } from './../services/idGenerator';
import { Request, Response } from "express";
import insertAddress from '../data/insertAddress';


export default async function createAddress (
   req: Request,
   res: Response
) {
    try {
      if (
         !req.body.cep ||
         !req.body.numero ||
         !req.body.complemento
       
      ) {
         throw new Error(' "O preenchimento de todos os campos são obrigatórios')
      }

      const id: string = generateId()

      await insertAddress(
        
         req.body.cep,
         req.body.numero,
         req.body.complemento
  

      )

      res.status(400).send({
         message: "Endereço criado com sucesso!",
         id
      })

   } catch (error) {
      let message = error.sqlMessage || error.message

         res.status(400).send({ message })
   }
}