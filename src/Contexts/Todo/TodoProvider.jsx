import { useState, useContext, useEffect } from "react";
import { TodoCreateContext } from "./TodoCreateContext";

const useTodoData = () => useContext(TodoCreateContext);

function TodoProvider({ children }) {
  const todoData = JSON.parse(localStorage.getItem("todo_list"));
  const [todoList, setTodoList] = useState(todoData || []);

  const createTodo = (data) => {
    setTodoList((pre) => [...pre, data]);
  };

  const updateTodo = (id, data) => {
    setTodoList((pre) =>
      pre.map((preData) =>
        preData.id === id ? { ...preData, ...data } : preData
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList((pre) => pre.filter((data) => data.id !== id));
  };

  const completeTodo = (id) => {
    setTodoList((pre) =>
      pre.map((preData) =>
        preData.id === id
          ? { ...preData, complete: !preData.complete }
          : preData
      )
    );
  };

  useEffect(() => {
    // todoList.length > 0 && //This condition (todoList.length > 0) means the localStorage update will only happen if the todoList has items. If the list becomes empty after deletion, the localStorage won't be updated, and the old data will persist.
    localStorage.setItem("todo_list", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoCreateContext.Provider
      value={{ todoList, createTodo, updateTodo, deleteTodo, completeTodo }}
    >
      {children}
    </TodoCreateContext.Provider>
  );
}

export { TodoProvider, useTodoData };
