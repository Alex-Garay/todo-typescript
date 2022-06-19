import React from 'react';
import { useState } from 'react';
const TodoItem: React.FC<Props> = ({todos, toggle}) => {
    const todoItem = todos.map((todo, i) => {
        const strike = todo.complete ? "line-through" : undefined
        return (
            <h1 style={{textDecoration: strike}} key={i}>
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