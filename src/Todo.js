import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ id = '1', task, completed, removeTodo, updateTodo }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleDelete = () => {
        removeTodo(id);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        updateTodo(id, editedTask);
        setEditing(false);
    };

    const handleMarkAsCompleted = () => {
        updateTodo(id, "", !completed)
    };


    const handleChange = (e) => {
        setEditedTask(e.target.value);
    }


    return (
        <div style={{ textDecoration: completed ? "line-through" : "none" }}>
            <label htmlFor={`task-${id}`}>
                {task}
            </label>


            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleMarkAsCompleted}>Mark As Completed</button>

            {isEditing && (
                <form onSubmit={handleEditSubmit}>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={handleChange}
                    />
                    <button>Update!</button>
                </form>
            )}
        </div>
    );
};

export default Todo;