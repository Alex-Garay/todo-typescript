interface TodoInterface {
    _id: number;
    message: string;
    complete: boolean;
}

interface Props {
    todos: TodoInterface[];
    toggle: Function;
    deleteTodoItem: Function;
}

interface AddTodoProps {
    addTodoItem: Function
}