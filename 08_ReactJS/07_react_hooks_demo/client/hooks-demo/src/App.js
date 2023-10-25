import { Todo } from "./Components/Todo/Todo.js";
import { useEffect, useState } from 'react';
import { useFetch } from "./Hooks/useFetch.js";
import { TodoList } from "./Components/Todo/TodoList.js";
import { useTaskOperations } from "./Hooks/useTaskOperations.js";
import { TodoContext } from "./Context/TodoContext.js";

function App() {
  const { todos, setTodos, isLoading } = useFetch();
  const { addTodo, deleteTodo, editTodo } = useTaskOperations();

  const addTodoHandler = async (title) => {
    const newTodo = await addTodo(title);

    setTodos((prevTodos) => ([
      ...prevTodos,
      newTodo
    ]))
  }

  const deleteTodoHandler = async (id) => {
    await deleteTodo(id);

    setTodos((prevTodos) => ([
      ...prevTodos.filter(x => x._id !== id),
    ]))
  }

  const editTodoHandler = async (editedTodo) => {
    await editTodo(editedTodo);

    setTodos(
      (prevTodos) => ([
        ...prevTodos.map((todo) => todo._id === editedTodo._id ? editedTodo : todo)
      ])
    )
  }



  return (
    <div className="App">
      <h1>Todos App</h1>
      <TodoContext.Provider value={{deleteTodoHandler, editTodoHandler}}>
        <TodoList todos={todos} addTodoHandler={addTodoHandler} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
