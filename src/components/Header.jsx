import Button from "./Button";

const Header = ({ title }) => {
  const logToConsole = () => {
    console.log('Hi There');
  };

  return (
    <header className='header'>
      <h1>{ title }</h1>
      <Button text='Add Task' color='green' onClick={logToConsole}/>
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker'
};

export default Header