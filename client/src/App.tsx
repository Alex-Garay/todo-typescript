import { useEffect, useState } from 'react';
import TodoItem from './components/todoItem';
import AddTodoItem from './components/addTodoItem'

const axios = require('axios').default;

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/todos');
      if (!(JSON.stringify(todos) === JSON.stringify(data))) {
        setTodos(data)
      }
    }
    fetchData();
  })

  const toggleComplete = (selectedTodo: TodoInterface) => {
    const completeUpdated = todos.map((todo: TodoInterface) => {
      if (selectedTodo === todo) {
        axios.put('/todo', {
          'id': selectedTodo._id,
          'complete': !selectedTodo.complete
        })
        return {
          ...todo, 
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(completeUpdated)
  }

  const addTodoItem = async (todoItem: TodoInterface) => {
    await axios.post('/todo', {
      "message": todoItem.message,
      "complete": todoItem.complete
    })
    const { data } = await axios.get('/todos');
    setTodos(data)
  }

  const deleteTodoItem = async (_id: number) => {
    await axios.delete('/todo', {
      data: {
        "_id": _id
      }
    })
    const { data } = await axios.get('/todos');
    setTodos(data)
  }

  return (
    <div className="App">
      <h1> Typescript Todo App</h1>
      {(todos.length > 0) ? <TodoItem todos={todos} toggle={toggleComplete} deleteTodoItem={deleteTodoItem}/> : null}
      <AddTodoItem addTodoItem={addTodoItem}/>
    </div>
  );
}

export default App;
