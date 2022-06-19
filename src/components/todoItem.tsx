import React from 'react';

const TodoItem: React.FC<Props> = ({todos, toggle}) => {
    const todoItem = todos.map((todo, i) => {
        return (
            <h1 key={i}>
                {todo.message}
                <input type="checkbox" onClick={() => {toggle(todo)}} checked={todo.complete}/>
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