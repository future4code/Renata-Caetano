import { connection } from "..";

export type User = {
    id: string;
    name: string;
    email: string;
  };
  export default async function selectUserByToken(id: string): Promise<User> {
    try {
      const result = await connection("create_user_cookenu").select("*").where({ id });
      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email
      };
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }}