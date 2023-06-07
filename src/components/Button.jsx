const Button = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color }}className='btn'>{text}</button>
  )
}

Button.defautProps = {
  color: 'steelblue'
};

export default Button