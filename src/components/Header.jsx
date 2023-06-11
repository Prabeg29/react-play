import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{ title }</h1>
      <Button text='Add Task' color='green'/>
    </header>
  )
}

export default Header