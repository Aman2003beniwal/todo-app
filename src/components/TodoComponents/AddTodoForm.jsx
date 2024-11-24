import React, { useState } from 'react'
import { useTodoData } from '../../Contexts';

function AddTodoForm() {

    const [inputValue, setInputValue] = useState('');
    const {createTodo} = useTodoData();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if(!inputValue) {
            alert('Please enter your todo...')
        }else {
            const data = {
                id : new Date,
                title : inputValue,
                complete: false
            }
            createTodo(data);
            setInputValue('');
        }
    }


  return (
    <>
        <div className="form-group mt-3">
            <div className="row">
                <div className="col-md-4">
                    <input type="text" className="form-control" id="todo" aria-describedby="emailHelp" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} placeholder="Enter You Todo"/>
                </div>
                <div className="col-md-3">
                    <button type="submit" onClick={handleAddTodo} className="btn btn-success">Add Todo</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddTodoForm