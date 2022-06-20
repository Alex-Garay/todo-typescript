interface TodoInterface {
    message: string;
    complete: boolean;
}

interface Props {
    todos: TodoInterface[];
    toggle: Function
}

interface AddTodoProps {
    addTodoItem: Function
}