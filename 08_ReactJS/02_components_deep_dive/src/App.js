import React, { useEffect, useState } from 'react';
import LoadingSpinner from './components/loading-spinner';
import Header from './components/header';
import TodoList from './components/todo-list';
import Footer from './components/footer';
import userEvent from '@testing-library/user-event';
import Todo from './components/singleTodo';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then((res) => res.json())
            .then((data) => {
                setTodos(
                    Object.values(data).map((value, index) => ({
                        id: index,
                        ...value,
                    }))
                );
            });
    }, []);

    function onCreateHandler() {
        let lastId = todos.length - 1
        const todo = {
            'id' : lastId + 1,
            'text': `New id ${lastId + 1}`,
            'isCompleted': Boolean(lastId % 2)
        }
        setTodos((prevTodos) =>{
            return [...prevTodos, todo];
        })
    }

    return (
        <div className="App">
            <Header />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button onClick={onCreateHandler} className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        <TodoList todos={todos} />
                        {/* <LoadingSpinner /> */}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
