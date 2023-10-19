import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import './Input.css'

function Textarea(props:any) {
  const {text, value, setValue, readonly=false, disabled=false, required=true} = props
  return (
   <div>
    <TextareaAutosize 
    readOnly={readonly}
    disabled={disabled}
    value={value}
    onChange={e=>setValue(e.target.value)}
    required={required}
    />
    <span>{text}</span>
   </div>
  )
}
export default Textarea