import { connection } from "..";

export default async function insertRecipes(
    id: string,
    title: string,
    description: string,
    user_id:string,
    date:Date
) {
    await connection('to_do_recipes_cookenu')
        .insert({
            id,
            title,
            description,
            user_id,
            date
        })
}