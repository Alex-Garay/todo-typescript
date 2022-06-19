import React from "react";
import { useState } from "react";
const AddTodoItem: React.FC<AddTodoProps> = ({addTodoItem}) => {
    const [todoValue, setTodoValue] = useState("")
    const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
        setTodoValue((event.currentTarget[0] as HTMLInputElement).value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // More length validation
        if (!(todoValue.length > 2)) return
        addTodoItem({
            "message": todoValue,
            "complete": false
        })
        setTodoValue("")
    }
    return (
        <div>
            <form onChange={(e) => handleChange(e)} onSubmit={(e) => handleSubmit(e)}>
                <input type="text" value={todoValue} minLength={3}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddTodoItem