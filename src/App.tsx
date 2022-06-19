import { useState } from 'react';
import TodoItem from './components/todoItem';

const initialTodoData: TodoInterface[] = [
  {
      "message": "Go for a morning walk.",
      "complete": true
  },
  {
      "message": "Make a cup of tea.",
      "complete": true
  }, {
      "message": "Eat Breakfast.",
      "complete": false
  }
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

  return (
    <div className="App">
      <h1> Typescript Todo App</h1>
      <TodoItem todos={todos} toggle={toggleComplete}/>
    </div>
  );
}

export default App;
