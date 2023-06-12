const Button = ({ text, color, toggleShowAddTaskForm }) => {
  
  return (
    <button
      className="btn" 
      style={{ backgroundColor: color}}
      onClick={toggleShowAddTaskForm}
    >{ text }</button>
  )
}

export default Button