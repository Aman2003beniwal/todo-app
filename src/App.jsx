import AddTodoForm from "./components/TodoComponents/AddTodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import { useTodoData } from "./Contexts";

function App() {
    const {todoList} = useTodoData();
    
  return (
    <>
        <div className="container">
            <h2>Todo App</h2>
            <AddTodoForm/>
            <TodoList/>
        </div>
    </>
  )
}

export default App
