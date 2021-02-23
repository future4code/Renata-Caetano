/**************************** IMPORTS ******************************/
import express, { Express, Request, Response } from "express"
import cors from "cors"
import createUser from "../src/controller/createUser";
import login from "../src/controller/login";
import createPost from "../src/controller/createPost";
import getPostById from "../src/controller/getPostById";
import { userRouter } from "./controller/routes/userRouter";
import { postRouter } from "./controller/routes/postRouter";

/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())
/**************************** TYPES ******************************/

/**************************** SERVICES ******************************/

/**************************** ENDPOINTS ******************************/

app.use('/users', userRouter )

app.use('/posts', postRouter)



/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})