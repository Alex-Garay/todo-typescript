import React from 'react';

const TodoItem: React.FC<Props> = ({todos}) => {
    const todoItem = todos.map((todo, i) => {
        return (
            <h1 key={i}>
                {todo.message}
                <input type="checkbox" onClick={() => {console.log("Hello!")}} checked={todo.status}/>
            </h1>
        )
    })
    return (
        <>
       {todoItem}
        </>
    )
}

export default TodoItem