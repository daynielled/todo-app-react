import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ onAddTodo }) => {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({ id: uuid(), task: task }) 
        setTask('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id="task"
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Enter Task"
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>

    );
};

export default NewTodoForm;