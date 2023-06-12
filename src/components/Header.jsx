import { useLocation } from 'react-router-dom'

import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button
        text={showAddTask ? 'Hide Form' : 'Add Task'}
        color={showAddTask ? 'red' : 'green'}
        onClick={onAdd}
      />}
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header