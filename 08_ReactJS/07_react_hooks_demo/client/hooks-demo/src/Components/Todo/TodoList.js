import { useState } from "react";
import { Todo } from "./Todo.js"
import styles from './Todo.module.css';

export const TodoList = ({ todos, addTodoHandler }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [todoAddedValue, todoSetAddedValue] = useState('');

    const onAddSubmit = (e) => {
        e.preventDefault();
        addTodoHandler(todoAddedValue);
        setIsAdding(false);
        todoSetAddedValue('');
    }

    const onChange = (e) => {
        todoSetAddedValue(
            e.target.value
        )
    }

    return (
        <>
            {
                isAdding &&
                <form className={styles.onAddForm} onSubmit={onAddSubmit}>
                    <button className={styles.cancelBtn} onClick={() => setIsAdding(false)}>x</button>
                    <input type="text" id="task" name="task" value={todoAddedValue} onChange={onChange} />
                    <input type="submit" className={styles.submitBtn} />

                </form>
            }
            <button className={styles.addBtn} onClick={() => setIsAdding(true)}>
                Add Todo
            </button>
            <ul>
                {
                    todos?.map(todo => <Todo key={todo._id} todo={todo} />)
                }
            </ul></>

    )
}