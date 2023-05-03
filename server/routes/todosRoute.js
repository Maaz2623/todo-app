import express from 'express'
import { createTodo, deleteTodo, getAllTodos } from '../controllers/todoController.js'

const router = express.Router()

router.post('/', createTodo)
router.get('/', getAllTodos)
router.delete('/delete/:id', deleteTodo)


export default router;