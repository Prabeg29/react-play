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

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
