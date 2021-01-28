import { connection } from "..";

export default async function insertAddress(
    //id: string,
    cep:number,
    numero:number,
    complemento?:string,
    // bairro?:string,
    // cidade?:string,
    // estado?:string,
    //user_id: string
  
   
) {
    await connection('ADDRESS_USER')
        .insert({
        cep,
        numero,
      complemento,
    
   // user_id: string
        })
}