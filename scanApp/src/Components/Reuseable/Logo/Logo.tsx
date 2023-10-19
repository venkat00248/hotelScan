import './Logo.css'
function Logo(props:any) {
  const {text='TurtleX', text2='Digital'} = props

  return <a className="logo" >
   
    <img src='https://i.imgur.com/QQ8FTjR.png' alt=""/>
    <span>
      <strong>{text}</strong>
      <span>{text2}</span>
    </span>
  </a>
}
export default Logo