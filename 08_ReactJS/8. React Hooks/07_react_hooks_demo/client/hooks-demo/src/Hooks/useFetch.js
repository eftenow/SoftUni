import { useEffect, useState } from "react";

const baseUrl = "http://localhost:3030/jsonstore/todos"

export const useFetch = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                const todosArray = Object.values(result);
                setTodos(todosArray);
                setIsLoading(false);
            })
    }, [])

    return { todos, setTodos, isLoading };
}