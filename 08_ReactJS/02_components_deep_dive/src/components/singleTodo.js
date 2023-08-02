import { useState } from "react";

const Todo = ({ todo }) => {
    const [currentStatus, setStatus] = useState(todo.isCompleted)

    function onStatusChange() {
        setStatus(
            (currentStatus) => !currentStatus 
        )
    }


    return (
        <tr className={currentStatus ? 'todo is-completed' : 'todo'}>
            <td>{todo.text}</td>
            <td>{currentStatus ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button onClick={onStatusChange} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
};

export default Todo;