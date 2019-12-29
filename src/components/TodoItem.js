import React from 'react';

const TodoItem = (props) => {
    const completed = {
        textDecoration: "line-through",
        color: "#cdcdcd"
    }

    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)} />
            <p style={props.item.completed ? completed : null}>{props.item.text}</p>
        </div>
    )
}
    


export default TodoItem