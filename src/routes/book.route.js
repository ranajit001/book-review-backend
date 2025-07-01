import {Router} from 'express';
export const bookRouter = Router();


import { addbook,getBook,updateBook,deleteBook } from '../controllers/book.controller.js';



bookRouter
.post('/add',addbook)
.get(['/get/:id','/get'],getBook)
.patch('/update/:id',updateBook)
.delete('/delete/:id',deleteBook)