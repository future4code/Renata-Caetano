import * as jwt from "jsonwebtoken";

export function generateToken(id:string): string { // recebe ID

    const token:string = jwt.sign({id}, //gera o token com ID recebido
      process.env.JWT_KEY as string,
      {expiresIn: process.env.JWT_EXPIRE_TIME as string || "1d"});
      return token;
}

export function getTokenData(token:string):AuthenticationData{
const payload = jwt.verify(token,process.env.JWT_KEY as string);

return payload as AuthenticationData;
}

export type AuthenticationData ={
  id:string
}

