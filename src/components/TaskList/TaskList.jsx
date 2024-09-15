 import React from 'react'
 import './TaskList.css'
import Task from '../Task/Task'
 
 const TaskList = ({tasks,setTasks}) => {
   return (
 <ul className='myItems'>
  
{tasks.map((text,index)=>(
 <Task  key={index} index={index} text={text} tasks={tasks} setTasks={setTasks}/>
))}
 </ul>
   );
 };
 

 export default TaskList
 

