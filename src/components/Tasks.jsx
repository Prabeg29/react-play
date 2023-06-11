import Task from './Task';

const Tasks = ({ tasks, onToggle, onDelete }) => {
  return (
    <div>
      {tasks.map(task => <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>)}
    </div>
  )
}

export default Tasks