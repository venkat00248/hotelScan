import React from 'react'
import Icon from './Icon'
import { Button } from '@mui/material'

function Rippleicon(props:any) {
  const {icon, clickEvent, size} = props
  return <Button 
          onClick={()=>clickEvent && clickEvent()}
          style={{width: 'initial', padding: '0', borderRadius: '50%', height: 'initial', minWidth: 'initial'}}
          
           >
        <Icon icon={icon+ ' fillcontainer'}/>
  </Button>
}
export default Rippleicon