import React from "react";

const Todo = ({ task, removeTodo, id='1' }) => {
    return (
        <div>
            {task}
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    );
};

export default Todo;