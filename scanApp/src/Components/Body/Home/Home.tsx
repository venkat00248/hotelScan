/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { profile } from '../../Appconstant'
import Carouselcont from '../../Reuseable/Carousel/Carouselcont'
// import Typeonload from '../../Reuseable/Typeonload/Typeonload'
import Aboutsection from '../Aboutsection/Aboutsection'
import Banner from '../Banner/Banner'
import Slide from '../Banner/Slide'
import Featuressection from '../Featuressection/Featuressection'

function Home(props:any) {
  const [currentslide, setCurrentslide] = useState(0)
  const slidesrow = profile?.map((el, i)=>{
    return <Slide  slide={el} index={i} currentslide={currentslide}/>
  })
  
  const bannercont = {
  html: 
      <>
      <div className="title">
        <h2>
            {/* <Typeonload text={'Joshua Bitton'} /> */}
            <p>Cloud 4c</p>
          <small className='graytext' style={{fontSize: '14px'}}>
            {/* <p> cloud Infrastructure </p> */}
            {/* <Typeonload text='Web Developer' startDelay={1000} /> */}
          </small>
        </h2>
        <div className='hr'></div>
    </div>
      <Carouselcont slides={slidesrow} setCurrentslide={setCurrentslide} currentslide={currentslide}/>
    </>
  }

  useEffect(()=>{
    setCurrentslide(0)
  },[])

  return (
    <div className='home'>
        <Banner 
        name='Joshua Bitton'
        hr={true} 
        html={bannercont.html} 
        height='100vh'
        style={{
          backgroundImage: 'url(https://i.imgur.com/n743WDX.png)',
          backgroundAttachment: 'fixed'
        }}
        />
        {/* <Aboutsection /> */}
        {/* <Featuressection /> */}
    </div>
  )
}
export default Home