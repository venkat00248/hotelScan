import React, { useContext, useState } from 'react'
import Banner from '../Banner/Banner'
import './Contact.css'
import Card from  '../../Reuseable/Card/Card'
import { contactboxes, contactinputs } from '../../Appconstant'
import Iconbox from '../../Reuseable/Icon/Iconbox'
import Objectinput from '../../Reuseable/Input/Objectinput'
import AppButton from '../../Reuseable/Button/Button'
// import emailjs from 'emailjs-com';
import Bannerprops from '../Banner/Bannerprops'
import { ContextApp } from '../../../ContextAPI'

function Contact() {
  const {notifisystem} = useContext(ContextApp)
  const [formvalues, setFormvalues] = useState({
    name: '',
    email: '',
    msg: ''
  })
  function sendEmail(e:any) {
    
  }
  const forminputs = contactinputs?.map(input=>{
    return <Objectinput 
    text={input.text} 
    value={formvalues} 
    setValue={setFormvalues} 
    obj={input.value}
    textarea={input.textarea}
    name={input.name}
    />
  })
  const contactboxesrow = contactboxes?.map(box=>{
    return (
       <Card copy={true} card={box} iconlink={
        // target={!box.notblank&& '__blank'}
        <a href={box.link}>
          <i className='fal fa-chevron-right'></i>
        </a>
       }/>
    )
  })

  return (
    <div className="contact">
          <Bannerprops 
          img='https://i.imgur.com/fzc9vDw.png' 
          title='Contact' 
          text='Contact me to get your dream website up and ready for the rest of the world to see!' 
          />
          <div className="contactinfo">
              <div className="contactitle">
                <h2>Contact Me</h2>
                <small className="graytext">
                  Don't hesitate to reach out to me!
                </small>
              </div>
              <div className="contactboxes">
                {contactboxesrow}
              </div>
          </div>
          <div className="contactform">
              <div className="leftcontact">
                <Iconbox icon='fad fa-envelope'/>
                <h2>Send Me a Message</h2>
              </div>
              <form onSubmit={(e)=>sendEmail(e)}>
                {forminputs}
                <AppButton text={'Submit'} icon='fad fa-envelope'/>
              </form>
          </div>
    </div>
  )
}
export default Contact