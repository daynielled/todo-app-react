import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import "./NewTodoForm.css";

const NewTodoForm = ({ addNewTodo }) => {
    const [task, setTask] = useState('');
    const inputId = `task-${uuid()}`; //adding an id to eah input
   
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
            <form  onSubmit={handleSubmit}>
                <label htmlFor={inputId} >Enter Task</label>
                <input
                    id={inputId}
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