import React, { useState } from 'react'



const AddTask = ({tasks, setTasks}) => {
    const[newTask,setNewTask]=useState('');

    let handelSubmit=()=>{
        setTasks([...tasks,newTask])
        setNewTask('');//vide la champs input
    };
    let handelChange=(event)=>{
       setNewTask(event.target.value) 
       console.log(event.target.value)
    };
  return (
    <div className="inputDiv">
    <input type="text" value={newTask} onChange={handelChange} placeholder="Add a new task" id="taskInput"/> 
     <button onClick={() => handelSubmit()}> Add Task</button>
</div>
  );
};

export default AddTask
