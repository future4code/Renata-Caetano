import { connection } from "./connection";

export default async function selectPostById(
    id:string):Promise<any> {
        const queryResult = await connection.raw(`
        .select("*")
        .where({ id })
        `)
return [0][0]

}
//"labook_posts"