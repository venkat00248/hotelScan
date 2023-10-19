// import React, { useContext, useState } from 'react'
// import { HashLink } from 'react-router-hash-link'
import './Dropdown.css'
// import { ContextApp } from '../../../ContextApi'
function Dropdown(props:any) {
  const {dropdown, link} = props
  // const {keyword, setKeyword} = useContext(ContextApp)
  const optionsrow = dropdown?.map((option:any)=>{
    return (
    // <HashLink to={link.keyword?'/works':option.link} onClick={()=>{link.keyword && setKeyword(option.link)}}>
       <a> <span>
          <span>{option.text}</span>
        </span>
        <i className="fad fa-chevron-right"></i>
        </a>
    // </HashLink>
    )
  })

  return (
    <div className="dropdown">
        {optionsrow}
    </div>
  )
}
export default Dropdown