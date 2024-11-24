import { createContext } from 'react'

export const TodoCreateContext = createContext({
    todoList: [],
    createTodo: (data) => { },
    updateTodo: (id, data) => { },
    deleteTodo: (id) => { },
    completeTodo: (id, data) => { }
});