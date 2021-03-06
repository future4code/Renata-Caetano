import { Request, Response } from "express";
import selectUserByToken from "../data/selectUserByToken";
import { getTokenData } from "../service/authenticator";

export default async function getUserById(req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const user = await selectUserByToken(authenticationData.id);
    if (!user) {
      throw new Error("Usuário não encontrado :(");
    }
    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
      auth: req.headers.auth,
    });
  }
}