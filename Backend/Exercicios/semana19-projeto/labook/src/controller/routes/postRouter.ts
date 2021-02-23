import express from 'express'
import createPost from '../createPost';
import getPostById from '../getPostById';

export const postRouter = express.Router();

postRouter.post('/create', createPost)
 
postRouter.get('/:id', getPostById)