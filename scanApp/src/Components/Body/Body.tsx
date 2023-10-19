import React, { useContext, useState } from 'react'
import { ContextApp } from '../../ContextAPI'
import Navbar from '../Navbar/Navbar'
import Icon from '../Reuseable/Icon/Icon'
import { links, style, works } from '../Appconstant'
import './Body.css'
import { Route } from 'react-router-dom'
import Home from './Home/Home'
import Contact from './Contact/Contact'
// import NotificationSystem from 'react-notification-system';
import Footer from './Footer/Footer'
import YouAreLost from './404/YouAreLost'
import Works from './Works/Works'
import Projectpage from '../Reuseable/Projectpage/Projectpage'
import { AnimatePresence } from 'framer-motion'
import Aboutme from './Aboutme/Aboutme'

function Body(props:any) {
  const {scrolled, notifisystem} = useContext(ContextApp)
  const worksroutes = works?.map(project=>{ 
    return <Route path={project.link}>
      <Projectpage project={project}/>
    </Route>
  })

  return <div className="body">
     <Icon icon={scrolled?'fad fa-arrow-up top scrol':'top'} clickEvent={()=>window.scrollTo(0, 0)}/>
     {/* <NotificationSystem ref={notifisystem} style={style}/> */}
     <Navbar links={links}/>
     <Home />
      {/* <AnimatePresence>
        <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/aboutme'>
            <Aboutme />
        </Route>
        <Route path='/services'>
            <Services />
        </Route>
        <Route exact path='/works'>
            <Works />
        </Route>
        {worksroutes}
        <Route path='/contact'>
            <Contact />
        </Route>
        
        <Route>
          <YouAreLost />
        </Route>
        </Switch>
      </AnimatePresence> */}
      <Footer />
  </div>
}
export default Body