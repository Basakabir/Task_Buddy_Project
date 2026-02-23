import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"


export default function App() {
  return(
    <div>
      <h1>Task Buddy</h1>
      <p>Our friendly task manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button>Clear All Task</button>
    </div>
  )
}

