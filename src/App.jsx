 
import './App.css'
import MyTitle from './components/MyTitle/MyTitle'
import AddTask from './components/Task/AddTask';
import TaskList from './components/TaskList/TaskList'
import { useState } from 'react';


function App() {
  const[tasks, setTasks]=useState([
    'faire la vaisselle',
    'nettoyer la cuisine',
    'passer la serpillere',
    'preparer le diner'
   ]);
  
  return (
    <div>
     <MyTitle titre={'ToDo List'}/>
     <TaskList tasks={tasks} setTasks={setTasks}/>
     <AddTask tasks={tasks} setTasks={setTasks} />
     
     </div>
  )
}
 

export default App
