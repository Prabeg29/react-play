const Button = ({ text, color }) => {
  const logToConsole = () => console.log('Button clicked');
  
  return (
    <button
      className="btn" 
      style={{ backgroundColor: color}}
      onClick={logToConsole}
    >{ text }</button>
  )
}

export default Button