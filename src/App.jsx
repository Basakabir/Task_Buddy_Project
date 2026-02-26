import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"
import "./Style.css";


export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }
  
  return(
    <div className="App">
      <header>
      <h1 className="title">Task Buddy</h1>
      <p className="tagline">Our friendly task manager</p>
      </header>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && 
      (<button onClick={clearTasks} className="clear-btn">Clear All Task</button>)}
    </div>
  )
}

