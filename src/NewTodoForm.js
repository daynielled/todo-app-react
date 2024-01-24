import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addNewTodo }) => {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo({ task, id: uuid() }) 
        setTask('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id="task"
                    name="task"
                    type="text"
                    value={task}
                    onChange={handleChange}
                    placeholder="Enter Task"
                />
                <button>Add Task!</button>
            </form>
        </div>

    );
};

export default NewTodoForm;