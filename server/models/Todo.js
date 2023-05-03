import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    priorityLevel: {
        type: Number,
        default: 1
    }
})

export default mongoose.model('Todo', todoSchema)