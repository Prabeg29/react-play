import { useLocation } from 'react-router-dom';

import Button from './Button';

const Header = ({ title, showAddTaskForm, toggleShowAddTaskForm }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button
        text={showAddTaskForm ? 'Hide Form' : 'Add Task'}
        color={showAddTaskForm ? 'red' : 'green'}
        toggleShowAddTaskForm={toggleShowAddTaskForm}
      />
      }

    </header>
  )
}

export default Header