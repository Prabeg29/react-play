import { useEffect, useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState( []);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetch(`http://localhost:5000/tasks`);
        setTasks(await await data.json());
    };

    fetchTasks();
  }, []);

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
