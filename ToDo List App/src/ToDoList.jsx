import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDoList = () => {
    const [initial, setIntial] = useState();
    const [data, setData] = useState([]);

    const getInput = (event) => {
        console.log(event.target.value);
        setIntial(event.target.value)
    }
    const getData = () => {
        console.log(initial);
        let store = [...data, initial]
        setData(store)
        setIntial("") // Clear the input field after adding task
    }
    const deleteTask = (index) => {
        console.log(index);
let filterData = data.filter((curElem, id)=>{
    return id != index
})
   setData(filterData)
    }
    console.log(data);

    return (
        <>
            <div className="container">
                <div className="inputTask">
                    <input type="text" placeholder='Enter Your Task' value={initial} onChange={getInput} />
                    <button onClick={getData}>Add</button>
                </div>
                {data.map((curVal, index) => {
                    return (
                        <>
                            <div className="taskData">
                                <p>{curVal}</p>
                                <i><FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(index)} id='deleteIcon' /></i>
                            </div>
                        </>
                    )
                })}
            </div>
        </>

    )
}

export default ToDoList
