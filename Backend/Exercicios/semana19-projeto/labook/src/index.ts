/**************************** IMPORTS ******************************/
import express, { Express, Request, Response } from "express"
import cors from "cors"
import createUser from "../src/controller/createUser";
import login from "../src/controller/login";
import createPost from "../src/controller/createPost";
import getPostById from "../src/controller/getPostById";

/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())
/**************************** TYPES ******************************/

/**************************** SERVICES ******************************/

/**************************** ENDPOINTS ******************************/
app.post('/users/signup', createUser )

app.post('/users/login', login)

app.post('/posts/create', createPost)
 
app.get('/posts/:id', getPostById)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})