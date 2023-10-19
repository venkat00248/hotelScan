import React from 'react'
import './Input.css'

function Input(props:any) {
  const {
    value, setValue, 
    copy, type='text',
    disabled=false, icon='',
    text, placeholder,
    readonly=false,
    required=true
    } = props

  return (
    <label className='applabel'>
      <input
      className='input' 
      type={type} 
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readonly}
      value={value}
      required={required}
      onChange={e=>setValue(e.target.value)}
      />
      <span>{text}</span>
      <i className={icon}></i>
  </label>
  )
}
export default Input