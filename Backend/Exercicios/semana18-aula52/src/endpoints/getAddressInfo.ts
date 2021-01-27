import { address } from './../type/address';
import {Request,Response} from 'express';
import { getAddresByCep } from '../services/addressManager';

export async function getAddressInfo(req:Request, res:Response){
    let errorCode:number =400;
    try{
        if(isNaN(Number(req.params.cep)) || req.params.cep.includes("-")){
            throw new Error ("Numeric values only");
        }

        const cep = req.params.cep

        const address:address = await getAddresByCep(cep)
        res.status(200).send(address)

    }catch (error){
        res.status(errorCode).send ({message:error.message});
    }
}



