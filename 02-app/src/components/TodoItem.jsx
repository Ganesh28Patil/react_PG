import React from "react";

const TodoItem = (props) => {
    return(
        <li className="todo-item">
            <input type="checkbox" name="item" id="" />
            <p>{props.item}</p>
            <p> ... </p>
        </li>
    )
}
export default TodoItem;