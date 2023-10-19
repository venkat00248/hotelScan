import React from 'react'
import Banner from './Banner'

function Bannerprops(props:any) {
  const {img, title, text, backgroundcolor='#f5f5f5'} = props
  return (
    <Banner
    className='bp' 
    style={{
      backgroundImage: `url(${img})`,
      backgroundColor: backgroundcolor
    }}
    html={
    <>
      <div style={{
        width: '30%'
      }}>
        <h1>{title}</h1>
        <small className="graytext">
          {text}
        </small>
      </div>
    </>
  }

  />
  )
}
export default Bannerprops