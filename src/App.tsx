import { useState } from 'react';
import TodoItem from './components/todoItem';
import AddTodoItem from './components/addTodoItem'

const initialTodoData: TodoInterface[] = [
  {
      "message": "Go for a morning walk.",
      "complete": true
  },
  {
      "message": "Make a cup of tea.",
      "complete": false
  }, {
      "message": "Eat Breakfast.",
      "complete": true
  }, {
      "message": "Study coding.",
      "complete": false
}, {
      "message": "Go to the gym.",
      "complete": true
},
]

function App() {
  const [todos, setTodos] = useState(initialTodoData)

  const toggleComplete = (selectedTodo: TodoInterface) => {
    const completeUpdated = todos.map((todo) => {
      if (selectedTodo === todo) {
        return {
          ...todo, 
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(completeUpdated)
  }

  const addTodoItem = (todoItem: TodoInterface) => {
    setTodos([...todos, todoItem])
  }

  return (
    <div className="App">
      <h1> Typescript Todo App</h1>
      <TodoItem todos={todos} toggle={toggleComplete}/>
      <AddTodoItem addTodoItem={addTodoItem}/>
    </div>
  );
}

export default App;
