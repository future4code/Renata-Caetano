import {connection} from '../index'

export default async function insertUser(
    id: string,
    name: string,
    email: string,
    password: string
        
    ) {
        console.log (process.env.DB_USER);
        
        await connection.insert({
            id,
            name,
            email,
            password,
            
        }).into('create_user_cookenu')
    }
    
