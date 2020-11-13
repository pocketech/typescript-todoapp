import React, { useState } from 'react'
import { Task } from './Types'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import './App.css'

const initialState: Task[] = [
  {
    id: 2,
    title: '次にやるやつ',
    done: false
  },
  {
    id: 1,
    title: '最初にやるやつ',
    done: true
  }
]

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}


export default App;
