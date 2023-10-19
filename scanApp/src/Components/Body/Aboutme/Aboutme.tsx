import React from 'react'
import Aboutsection from '../Aboutsection/Aboutsection'
import Bannerprops from '../Banner/Bannerprops'
import './Aboutme.css'
const Aboutme = () =>{

  return (
    <div className="aboutme ">
       <Bannerprops 
        img='https://i.imgur.com/1PBKN6Z.png' 
        title='About Me' 
        text='Learn More about me and my skills.'/>

        <div className="aboutmepart">
          <Aboutsection fulltext limit={Infinity}/>
        </div>
    </div>
  )
}
export default Aboutme