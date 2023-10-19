import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'
import './Input.css'

function Objectinput(props:any) {
  const {
    value, setValue, 
    copy, type='text',
    disabled=false, icon='',
    text, placeholder,
    readonly=false,
    required=true,
    obj, textarea,
    name
    } = props

  return (
   <> 
   {
    !textarea?
    <label className='applabel'>
      <input
      name={name}
      className='input' 
      type={type} 
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readonly}
      value={value[obj]}
      required={required}
      onChange={e=>setValue({
        [obj]: e.target.value
      })}
      />
      <span>{text}</span>
      <i className={icon}></i>
  </label>
  :
  <div>
    <TextareaAutosize 
    readOnly={readonly}
    disabled={disabled}
    value={value[obj]}
    onChange={e=>setValue({
      [obj]: e.target.value
    })}
    required={required}
    className='resizabletextarea'
    name={name}
   />
    <span>{text}</span>
  </div> 
  }
  </>
  )
}
export default Objectinput