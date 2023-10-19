
function Themebtn(props:any) {
  const {
    icon, clickEvent, 
    text} = props

    return (
      <button
       className='button'
       onClick={()=>clickEvent && clickEvent()}>
        <span>{text}</span>
        <i className={icon}></i>
      </button>
    )
}
export default Themebtn