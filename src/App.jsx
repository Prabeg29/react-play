import { useEffect, useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      setTasks(await fetchTasks());
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    
    return await res.json();
  };

  const deleteTask = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });

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
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
