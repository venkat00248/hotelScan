import React, { useEffect } from 'react'
import AppButton from '../../Reuseable/Button/Button'
import Themebtn from '../../Reuseable/Button/Themebtn'
import Iconbox from '../../Reuseable/Icon/Iconbox'
import Textarrow from '../../Reuseable/Textarrow/Textarrow'

function Slide(props:any) {

  function determineFade(type:any){
    if(currentslide === index) return ''
    
    return `fade-${type}`
  }
  
  const {slide, currentslide, index} = props
  return (
    <div  className={`slide ${currentslide === index?'active':'inactive'}`}>
      <div>
      <h3 data-aos={determineFade('right')}>
        <Iconbox icon={`fad fa-${slide.icon}`}/>
        <span>{slide.title}</span>
      </h3>
      <p className='graytext' data-aos={determineFade('right')}>
        <i className={'fad fa-'+slide.texticon}></i>
        <span>{slide.text}</span>
      </p>
      <div className="btns" data-aos={determineFade('up')}>
       <Textarrow link='/aboutme'/>
      </div>
      </div>
      <div data-aos={determineFade('left')}>
        <img src={slide.img} alt=""/>
      </div>
    </div>
  )

}
export default Slide