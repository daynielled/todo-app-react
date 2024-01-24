import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    // useEffect(() => {
    //     //Retrieve todos from localstorage on page load
    //     const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    //     setTodos(savedTodos);
    // }, []);

    // useEffect(() => {
    //     //Save todos to localStorage whenever todos change
    //     localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);

    //Add a new todo
    const addNew = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

     // update a todo with updatedTask
  const updateTodo = (id, updatedTask, completed) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id 
        ? {
            ...todo,
            task: updatedTask !== "" ? updatedTask : todo.task,
            completed: completed !== undefined ? completed : todo.completed,
          }
          : todo
      )
    );
  };

    //Remove a todo by id
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
                    completed={todo.completed}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;