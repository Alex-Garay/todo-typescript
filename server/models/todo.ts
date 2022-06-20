import mongoose from "mongoose";
import { connection } from "../utils/connection";

connection();

const todoSchema = new mongoose.Schema({
    message: String,
    complete: Boolean
})

export const TodoModel = mongoose.model('Todo', todoSchema)