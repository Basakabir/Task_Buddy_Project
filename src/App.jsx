import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"


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
  
  return(
    <div>
      <h1>Task Buddy</h1>
      <p>Our friendly task manager</p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>Clear All Task</button>
    </div>
  )
}

