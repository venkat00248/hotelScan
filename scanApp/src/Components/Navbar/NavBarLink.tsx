import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { NavHashLink } from 'react-router-hash-link'
import Dropdown from './Dropdown/Dropdown'
import { CSSTransition } from 'react-transition-group'

function NavBarLink(props:any) {
  const {link, clickEvent} = props
  return (
    <div>
    {/* <NavHashLink 
    to={link.link+'#top'} 
    exact={link.exact}
    activeClassName='activelink'
    onClick={()=>{clickEvent && clickEvent()}}
    isActive={(match, location)=> {if(match) return true}}
   > */}
   <a>
      <span>{link.text}</span>
      <div className="dot"></div>
    {/* </NavHashLink> */}</a>
       {
        link.dropdown
        &&
          <Dropdown dropdown={link.dropdown} link={link}/>
        }
    </div>
  )
}
export default NavBarLink