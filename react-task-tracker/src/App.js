import React from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30",
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30",
        reminder: true,
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30",
        reminder: false,
    },
])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header></Header>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>) : ("No Tasks to Show")}
    </div>
  );
}

export default App;
