import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{ title }</h1>
      <Button text='Add Task' color='green'/>
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header