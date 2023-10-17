import { useState } from "react"

export const Todo = (props) => {
    const [status, setStatus] = useState(props.isCompleted);
    const onRemoveHandler = () => {
        props.onRemove(props._id)

        fetch(`http://localhost:3030/jsonstore/todos/${props._id}`,{
             method: 'DELETE',
         })
    }


    const onCompleteHandler = (e) => {
        setStatus(currentStatus => (!currentStatus))
    }


    return (
        <div className="todoContainer">
            <button onClick={props.onUp}>Up</button>
            <button onClick={props.onDown}>Down</button>
            <li className={status ? 'completed' : 'todo'}>
                <span>Title: {props.title} </span>
            </li>

            <button onClick={onCompleteHandler}>Complete</button>
            <button onClick={onRemoveHandler}>Remove</button>

        </div>

    )
}