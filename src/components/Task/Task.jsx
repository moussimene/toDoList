import React, { useState } from 'react'
import './Task.css'

const Task = ({index, text,tasks,setTasks}) => {

  const[isEditing, setIsEditing]=useState(false);
  const[editValue,setEditValue]=useState(text);

  let handleDelete=(text)=>{
   let coppyOfTasks=tasks;
   coppyOfTasks=coppyOfTasks.filter((tasks) => tasks !==text);
   setTasks(coppyOfTasks);
  };

   let handelChange=(event)=>{
    setEditValue(event.target.value) 
    
 };
    let handelEdit=()=>{
      let coppyOfTasks=[...tasks];
      coppyOfTasks[index]=editValue;
      setTasks(coppyOfTasks);
      setIsEditing(false);

    };

  



  return (
  <li key={index}>
     {isEditing ===true ?( 
      <>
      <input type="text"
      value={editValue}
      onChange={handelChange}
       placeholder='Modifier la tache'/>
  <div style={{display:'flex', gap:'10px'}}>
       <button className='confirm' onClick={()=> handelEdit()}>confirm</button> 
       <button className='annuler'onClick={()=> setIsEditing(false)}>Annuler</button> 
       </div></>
     )
     :
     ( 
      
<>
      {text}
   <div style={{display:'flex', gap:'10px'}}>
    <button className='edit' onClick={()=>setIsEditing(true)}>Edit</button> 
    <button className='delete' onClick={()=> handleDelete(text)}>Delete</button></div>
     </>
     )
     }





    



  </li>
   
);
  
};

export default Task
