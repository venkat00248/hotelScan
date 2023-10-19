import React, { useContext, useEffect, useState } from 'react'
import Mappedarray from '../Body/Mappedarray/Mappedarray'
import Logo from '../Reuseable/Logo/Logo'
import NavBarLink from './NavBarLink'
import './Navbar.css'

import AppButton from '../Reuseable/Button/Button'
import { ContextApp } from '../../ContextApi'
function Navbar(props:any){
  const {links} = props
  const {scrolled, setScrolled} = useContext(ContextApp)
  const [navmenu, setNavmenu] = useState(false)
   const linksrow = <Mappedarray array={links}>
      {({prop}:any)=>(
        <NavBarLink link={prop} />
      )}

  </Mappedarray>

  function handleScroll(){
    if(window.scrollY > 50 ) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[])

  return <div className={`navbar ${scrolled?'navscrolled':''}`}>
     <Logo text='TurtleX' text2='Digital'/>
     <div className="links">
      {linksrow}
     </div>
     <div className={`mobbtn ${navmenu?"open":"closed"}`} onClick={() => setNavmenu(!navmenu)}>
            <hr className="l1"/>
            <hr className="l2"/>
            <hr className="l3"/>
     </div>
  
     <div className={navmenu?'navmenu navmenu-enter':'navmenu navmenu-exit'}>
        <Logo text='TurtleX' text2='Digital'/>
        <div className="linksmenu">
        {links?.map((link:any)=>{
          return <NavBarLink link={link} clickEvent={()=>setNavmenu(false)}/>
        })}
        <AppButton text='Learn More' icon='fal fa-arrow-right'/>
        </div>
      </div>

  </div>
}
export default Navbar