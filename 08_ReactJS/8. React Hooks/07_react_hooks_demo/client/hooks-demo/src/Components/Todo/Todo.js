import { useContext, useState } from 'react';
import styles from './Todo.module.css';
import { TodoContext } from '../../Context/TodoContext.js';

export const Todo = ({ todo }) => {
    const { deleteTodoHandler, editTodoHandler } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);


    const onDelete = (e) => {
        e.preventDefault();
        deleteTodoHandler(todo._id);
    }

    const onEdit = (e) => {
        e.preventDefault();
        setIsEditing(true);
    }

    const onEditSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const newValue = form.get('todo');
        const updatedTodo = {...todo, task: newValue}
        editTodoHandler(updatedTodo);
        setIsEditing(false);
    }

    return (
        <li className={styles.toDoItem}>
            {isEditing ? (
                <form onSubmit={onEditSubmit}>
                    <input name='todo' defaultValue={todo.task} />
                    <button className={styles.actionBtn}>Submit</button>
                </form>
            ) : (
                <>
                    <div>{todo.task}</div>
                    <div className={styles.buttons}>
                        <button className={styles.actionBtn} onClick={onEdit}>
                            Edit Todo
                        </button>
                        <button className={styles.actionBtn} onClick={onDelete}>
                            Remove Todo
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}    