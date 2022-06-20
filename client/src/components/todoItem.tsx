import React from 'react';
const TodoItem: React.FC<Props> = ({todos, toggle}) => {
    const todoItem = todos.map((todo, i) => {
        const strike = todo.complete ? "line-through" : undefined
        return (
            <h1 style={{textDecoration: strike}} key={i}>
                <label htmlFor="todo">{todo.message}</label>
                <input type="checkbox" name="todo" onChange={(e) => {}} onClick={() => {toggle(todo)}} checked={todo.complete}/>
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