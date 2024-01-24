import React from "react";

const Todo = ({ task, onDelete }) => {
    return (
        <div>
            {task}
            <button onClick={onDelete}>X</button>
        </div>
    );
};

export default Todo;