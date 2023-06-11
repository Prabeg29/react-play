import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "title": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "title": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    }
  ]);

  const addTask = task => setTasks([...tasks, task]);

  const toggleReminder = id => {
    setTasks(tasks.map(task => id === task.id ? {...task, reminder: !task.reminder} : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => id !== task.id));
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
