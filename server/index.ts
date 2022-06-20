import express from 'express'
import bodyParser from 'body-parser'
import { TodoModel } from './models/todo'

const app = express()
const port = 5000

// Allows to parse data in the request body
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

// Retrieve all todo items
app.get('/todos', async (req, res) => {
  try {
  const todos = await TodoModel.find({})
  res.send(todos)
  }
  catch {
    res.status(400).end();
  }
})

// Create a todo item
app.post('/todo', async (req, res) => {
  try {
    const { message, complete }: TodoCreate = req.body;
    await TodoModel.create({
    'message': message,
    'complete': complete
    })
    res.status(201).end();
  }
  catch {
    res.status(400).end();
  }
})

// Update a todo's complete status
app.put('/todo', async (req, res) => {
  try {
    const { id, complete }: TodoUpdate = req.body
    await TodoModel.findByIdAndUpdate(id, {
      'complete': complete
    })
    res.status(201).end();
  }
  catch {
    res.status(400).end();
  }
})

// Delete a specific todo
app.delete('/todo', async (req, res) => {
  try {
    const { _id }: number = req.body;
    await TodoModel.findByIdAndDelete(_id)
    res.status(200).end()
  }
  catch {
    res.status(400).end()
  }
})

app.listen(port, () => {
  console.log(`Api Server listening on port ${port}`)
})