import TodoTypes from "./todo";

const LOCAL_STOARAGE_KEY = 'todos';

const TodoService = {

    // Get Todos
    getTodos: (): TodoTypes[] => {
        const todoString = localStorage.getItem(LOCAL_STOARAGE_KEY)
        return todoString ? JSON.parse(todoString) : [];
    },

    // Add Todos
    addTodos: (text: string): TodoTypes => {
        const todos = TodoService.getTodos();
        const newTodo: TodoTypes = { id: todos.length = 1, text, completed: false };
        const updateTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STOARAGE_KEY, JSON.stringify(updateTodos));
        return newTodo;
    },

    // Update Todos
    updateTodo: (todo: TodoTypes): TodoTypes => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STOARAGE_KEY, JSON.stringify(updateTodos));
        return todo;
    },

    // Delete Todos
    deleteTodo: (id: number): void => {
        const todos = TodoService.getTodos();
        const updateTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STOARAGE_KEY, JSON.stringify(updateTodos));
    }

};

export default TodoService; 