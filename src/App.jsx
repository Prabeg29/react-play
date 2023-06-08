import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Fix bug',
        day: 'Feb 5th at 2.30 pm',
        reminder: true
      },
      {
        id: 2,
        text: 'Fix bug',
        day: 'Feb 5th at 2.30 pm',
        reminder: true
      },
      {
        id: 3,
        text: 'Fix bug',
        day: 'Feb 5th at 2.30 pm',
        reminder: true
      },
    ]
  );

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleReminder = id => {
    setTasks(
      tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task)
    );
  };

  const addTask = task => {
    console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {id, ...task};
    setTasks([ ...tasks, newTask ]);
  };

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
