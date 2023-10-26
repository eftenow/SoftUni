import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const baseUrl = "http://localhost:3030/jsonstore/todos"

export const useTaskOperations = () => {

    const addTodo = (taskName) => {
        const newTask = {
            "task": taskName,
            "isCompleted": false,
        }
        return fetch(baseUrl, {
            'method': 'POST',
            'headers': { "content-type": 'application/json' },
            'body': JSON.stringify(newTask)
        })
            .then(res => res.json())

    }

    const deleteTodo = (id) => {
        fetch(`${baseUrl}/${id}`,{
            'method': 'DELETE'
        }) 
    }

    const editTodo = (editedTodo) => {
        return fetch(`${baseUrl}/${editedTodo._id}`, {
            'method': 'PUT',
            'headers': { "content-type": 'application/json' },
            'body': JSON.stringify(editedTodo)
        })
            .then(res => res.json())

    }

    return { addTodo, deleteTodo, editTodo };
}