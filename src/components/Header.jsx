import Button from './Button';

const Header = ({ title, showAddTaskForm, toggleShowAddTaskForm }) => {
  return (
    <header className='header'>
      <h1>{ title }</h1>
      <Button
        text={showAddTaskForm ? 'Hide' : 'Add Task'}
        color={showAddTaskForm ? 'red' : 'green'}
        toggleShowAddTaskForm={toggleShowAddTaskForm}
      />
    </header>
  )
}

export default Header