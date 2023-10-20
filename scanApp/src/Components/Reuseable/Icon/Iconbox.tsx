/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import Icon from './Icon'

function Iconbox(props:any) {
  const {icon} = props
  return <div className="iconbox">
    <Icon icon={icon}/>
  </div>
}
export default Iconbox