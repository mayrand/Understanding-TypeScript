interface Todo {
    id: number;
    text: string;
}
let TODOS: Todo[] = [];

// This syntax is not allowed when 'erasableSyntaxOnly' is enabled.
// enum TODO_TYPE {
//     BASIC,
//     URGENT
// }

export function addTodo(text: string) {
    const newTodo = { id: TODOS.length, text };
    TODOS.push(newTodo);
    return newTodo;
}

export function getTodo(id: number) {
    const todo = TODOS.find(t => t.id === id);
    if (!todo)
        throw new Error('Todo not found!');
    return todo;
}

export function getTodos() {
    return TODOS;
}

export function removeTodo(id: number) {
    TODOS = TODOS.filter(t => t.id !== id);
}

export function updateTodo(id: number, text: string) {
    const todo = getTodo(id);
    todo.text = text;
    return todo;
}