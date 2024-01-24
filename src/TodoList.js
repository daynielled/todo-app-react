import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    //Add a new todo
    const addNew = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    //Remove a todo
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm addNewTodo={ addNew } />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;