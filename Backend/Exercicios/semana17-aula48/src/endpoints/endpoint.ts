import express, { Request, Response } from "express";
import selectAllUsers from "../data/queryEndpoint";


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        const userName = req.query.name as string
       const users = await selectAllUsers(username)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }