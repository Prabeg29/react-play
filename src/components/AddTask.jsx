import { useState } from "react"

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const submitTask = (e) => {
    e.preventDefault();

    if(!title) {
      alert('Please enter title');
    }

    const taskId = Math.ceil(Math.random() * 1000) + 1

    onAdd({ id: taskId, title, day, reminder })

    setTitle('');
    setDay('');
    setReminder(false);
  };


  return (
    <form className="add-form" onSubmit={submitTask}>
      <div className="form-control">
        <label>Title</label>
        <input 
          type="text" 
          placeholder="Add Task" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Add Day" 
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="Submit" value="Save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask