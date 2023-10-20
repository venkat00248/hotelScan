/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Rippleicon from '../Icon/Rippleicon'
import './Carousel.css'
function Carouselcont(props:any) {
  const {slides, setCurrentslide, currentslide} = props
  return  <Carousel 
      className='carousel' 
      NavButton={({onClick, className, style, next, prev})=>{
       return ( 
      //  <div onClick={onClick}>
      <div>
         <Rippleicon  size={34} icon={`fal fa-arrow-${next?'right':'left'}`}/>
       </div>
       )
      }}
      IndicatorIcon={<div className='line'></div>}
      activeIndicatorIconButtonProps={{className: 'active'}}
      interval={5000}
      onChange={e=>setCurrentslide(e)}
      >
       {slides}
  </Carousel>
}
export default Carouselcont