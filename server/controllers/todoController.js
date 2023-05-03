import Todo from '../models/Todo.js'

export const createTodo = async (req, res) => {
    try {
        const {title, priorityLevel} = req.body;
        const todo = new Todo({title, priorityLevel})
        const savedTodo = await todo.save()
        res.json(savedTodo)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json(todos)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete(id)
        if(!todo) throw new Error('User not defined')
        res.json(todo)
        
    } catch (error) {
        res.status(400).json({message: error.mesage})
    }
}