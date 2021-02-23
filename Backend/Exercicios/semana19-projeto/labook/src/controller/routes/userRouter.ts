import express from 'express'
import createUser from '../createUser'
import login from '../login'

export const userRouter = express.Router();

userRouter.post('/signup', createUser )

userRouter.post('/login', login)