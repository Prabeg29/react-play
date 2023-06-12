import { useEffect, useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState( []);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await fetch(`http://localhost:5000/tasks`);
      setTasks(await data.json());
    };

    fetchTasks();
  }, []);

  const fetchTask = async (id) => {
    const data = await fetch(`http://localhost:5000/tasks/${id}`);
    
    return await data.json();
  };

  const addTask = async task => {
    const res = await fetch(
      `http://localhost:5000/tasks`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    );

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  const toggleReminder = async id => {
    const taskToToggle = await fetchTask(id);
    const taskUpdated = { ...taskToToggle, reminder: !taskToToggle.reminder };
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(taskUpdated)
      }
    );

    const data = await res.json();

    setTasks(tasks.map(task => id === task.id ? {...task, reminder: !data.reminder} : task));
  };

  const deleteTask = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`,{ method: 'DELETE' });
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
