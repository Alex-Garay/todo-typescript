import { useState } from 'react';
import TodoItem from './components/todoItem';

const initialTodoData: TodoInterface[] = [
  {
      "message": "Go for a morning walk.",
      "status": true
  },
  {
      "message": "Make a cup of tea.",
      "status": true
  }, {
      "message": "Eat Breakfast.",
      "status": false
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodoData)
  return (
    <div className="App">
      <h1> Typescript Todo App</h1>
      <TodoItem todos={todos}/>
    </div>
  );
}

export default App;
