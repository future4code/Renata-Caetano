import { generateId } from './../service/idGenerator';
import { Request, Response } from "express";
import insertRecipes from '../data/insertRecipes';

export default async function createRecipes(
   req: Request,
   res: Response
) {
   try {
      if (
         !req.body.title ||
         !req.body.description ||
         !req.body.user_id ||
         !req.body.date
        
      ) {
         throw new Error('"title", "description", "date" são obrigatórios')
      }

      const id: string = generateId()

      await insertRecipes(
         id,
         req.body.title,
         req.body.description,
         req.body.user_id,
         req.body.date,
         
      )

      res.status(400).send({
         message: "Receita criada com sucesso!",
         id
      })

   } catch (error) {
      let message = error.sqlMessage || error.message

      if (message.includes("date")) {
         message = "'date' deve ser uma data válida, no formato aaaa-mm-dd"
      }

      res.status(400).send({ message })
   }
}