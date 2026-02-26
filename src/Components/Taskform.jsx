import { useState } from "react"

export default function Taskform({addTask}) {
    const[task, setTask] = useState('');
    const[priority, setProirity] = useState('medium');
    const[category, setCategory] = useState('general');

    const handlesubmit = (e) => {
        e.preventDefault();  //refresh
        addTask({text: task, priority, category, completed: false});

        //reset
        setTask('');
        setProirity('medium');
        setCategory('general');
    }

    return(
        <form onSubmit={handlesubmit} className="task-form">
            <div id="inp">
                <input type="text" placeholder="Enter your task" value = {task} onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
                {/*<h1>{task} {priority} {category}</h1>*/}
            </div>

            <div id="btns">
                <select value={priority} onChange={(e) => setProirity(e.target.value)}>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <select value = {category} onChange = {(e) => setCategory(e.target.value)}>
                    <option value="general">General</option>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}