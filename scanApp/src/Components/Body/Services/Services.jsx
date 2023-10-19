import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { gridservices } from '../../Appconstant'
import Bannerprops from '../Banner/Bannerprops'
import Gridservice from './Gridservice'
import './Services.css'
function Services() {
  const gridservicesrow = gridservices?.map(service=>{
    return (
       <Gridservice 
        service={service}
       />
    )
  })
  return (
    <div className="services">
        <Bannerprops 
        img='https://i.imgur.com/oFYPpob.png' 
        title='Services' 
        text='Learn More about the services I offer and how they can get your dream website up and running as soon as possible!'/>
        <div className="servicescontainer">
          {gridservicesrow}
        </div>
     </div>
  )
}
export default Services