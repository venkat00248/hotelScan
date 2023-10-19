import React from 'react'

function Mappedarray(props:any) {
  const {array} = props
  
  const arrayrow = array?.map((prop:any)=>props.children({
    prop
  }))

  return <>{arrayrow}</>
}
export default Mappedarray