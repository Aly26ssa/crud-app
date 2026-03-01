import { useState } from 'react';
import type TodoTypes from '../todo.ts';
import { TodoService } from '../todoService.ts';
import { FaCheck, FaCheckDouble, FaEdit } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { TodoForm } from './TodoForm.tsx';
import '../CSS/TodoList.css';


export const TodoList = () => {

    const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());
    const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string>("");

    // Enabling edit Actions
    const handleEditStart = (id:number, text:string) => {
        setEditingTodoId(id);
        setEditedTodoText(text);
    }

    const handleEditCancel = () => {
        setEditingTodoId(null);
        setEditedTodoText("");
    }

    const handleEditSave = (id:number) => {
        if(editedTodoText.trim() !== ''){
            const updateTodo = TodoService.updateTodo({
                id,
                text:editedTodoText,
                completed:false
            });

            setTodos((previousTodos) => previousTodos.map((todo) => (todo.id === id ? updateTodo : todo)));

            setEditingTodoId(null);
            setEditedTodoText("");
        }
    };

    // Delete Todo
    const handleDeleteTodo = (id:number) => {
        TodoService.deleteTodo(id);
        setTodos((previousTodo) => previousTodo.filter((todo) => todo.id !== id));
    }

    // Completed Todo
    const handleCompleteTodo = (id: number) => {
        const completedTodo = TodoService.completeTodo(id);
        setTodos((previousTodos) => 
            previousTodos.map((todo) => 
                todo.id === id ? completedTodo : todo
        ));
    };

    return (
        <div className="todoContainer">
            <div>
                <TodoForm setTodos = {setTodos} />
            </div>
            <div className="todos">
                {todos.map((todo) => (
                    <div className={`items ${todo.completed ? 'completed' : ''}`} key={todo.id}>
                        {editingTodoId == todo.id ? (
                            <div className="editText">
                                <input type="text" value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)} autoFocus={true} />
                                <button onClick={() => handleEditSave(todo.id)}>
                                    <FaCheck />
                                </button>
                                <button onClick={() => handleEditCancel()}>
                                    <FcCancel />
                                </button>
                            </div>
                        ) : (
                            <div className="editBtn">
                                <span>{todo.text}</span>
                                <button onClick={() => handleEditStart(todo.id, todo.text)}>
                                    <FaEdit />
                                </button>
                            </div>
                        )}
                        <div className="buttons">
                            <button className="completedBtn" onClick={() => handleCompleteTodo(todo.id)}>
                                <FaCheckDouble />
                            </button>
                            <button className="deleteBtn" onClick={() => handleDeleteTodo(todo.id)}>
                                <RiDeleteBin5Fill />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};