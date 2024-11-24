import React, { useState } from "react";
import { useTodoData } from "../../Contexts";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

function TodoList() {
  const { todoList, deleteTodo, updateTodo, completeTodo } = useTodoData();
  const [isEdit, setEdit] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleDelete = (id) => {
    if (!id) {
      alert("You not allow to perfom this action");
    } else {
      deleteTodo(id);
    }
  };

  const handleEdit = (id) => {
    const data = {
      title: inputValue,
    };
    updateTodo(id, data);
    setEdit(null);
  };

  const handleCheckBox = (id) => {
    completeTodo(id)
  };

  return (
    <div className="mt-md-5">
      <div className="row">
        <div className="col-md-6">
          {todoList.map((data) => (
            <ul className="list-group" key={data.id}>
              {isEdit === data.id ? (
                <>
                  <input
                    type="text"
                    className="form-control"
                    id="todo"
                    aria-describedby="emailHelp"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    placeholder="Enter You Todo"
                  />
                  <button
                    className="btn btn-dark btn-sm"
                    onClick={() => handleEdit(data.id)}
                  >
                    <AddIcon />
                  </button>
                </>
              ) : (
                <>
                  <li className= {`list-group-item ${data.complete ? "text-decoration-line-through" : ""}`}>
                    <span>
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onClick={() => handleCheckBox(data.id)}
                      />
                    </span>
                    {data.title}
                    <span>
                      <button
                        className="btn btn-dark btn-sm"
                        onClick={() => {
                          setEdit(data.id);
                          setInputValue(data.title);
                        }}
                      >
                        <EditIcon />
                      </button>{" "}
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(data.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </span>
                  </li>
                </>
              )}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
