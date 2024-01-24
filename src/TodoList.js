import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm handleSubmit={{ addTodo }} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    task={todo.task}
                    onDelete={() => removeTodo(todo.id)}
                />
            ))}
        </div>
    )
}

export default TodoList;