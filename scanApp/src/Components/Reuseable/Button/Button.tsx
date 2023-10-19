import './Button.css'
import { Button } from '@mui/material'

function AppButton(props:any) {
  const {
    icon, clickEvent, 
    text} = props

    return (
      <Button
      type='submit'
       className='button'
       onClick={()=>clickEvent && clickEvent()}>
        <span>{text}</span>
        <i className={icon}></i>
      </Button>
    )
}
export default AppButton;