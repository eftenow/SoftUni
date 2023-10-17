import { useEffect, useState } from 'react';
import { Todo } from './Todo.js';

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/jsonstore/todos")
          .then((res) => res.json())
          .then((result) => setTodos(Object.values(result)));
      }, []);

      const onRemoveHandler = (id) =>{
            setTodos((prevTodos) => prevTodos.filter((todo) => id !== todo._id));
      }

      const moveUpHandler = (index) => {
        if(index - 1 >= 0){
            setTodos((currentTodos) => {
                const updatedTodos = [...currentTodos];
                const upperNumber = updatedTodos[index - 1];
                const currentNumber = updatedTodos[index];

                updatedTodos[index - 1] = currentNumber;
                updatedTodos[index] = upperNumber;
                
                return updatedTodos;
            })
        }
      }

      const moveDownHandler = (index) => {
        if(index + 1 < todos.length){
            setTodos((currentTodos) => {
                const updatedTodos = [...currentTodos];
                const lowerNumber = updatedTodos[index + 1];
                const currentNumber = updatedTodos[index];

                updatedTodos[index + 1] = currentNumber;
                updatedTodos[index] = lowerNumber;
                
                return updatedTodos;
            })
        }
      }

    return(
        <>
        <ul>
            {todos.map((x, i) => (
                <Todo
                key={x._id}
                onRemove={onRemoveHandler}
                onUp={() => moveUpHandler(i)}
                onDown={() => moveDownHandler(i)}
                {...x} />
            ))}
        </ul>
        </>
        
    )
}