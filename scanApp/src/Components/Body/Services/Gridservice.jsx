import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Iconbox from '../../Reuseable/Icon/Iconbox'

function Gridservice(props) {
  const {title, texts, img, reverse, text, icon, link}  = props.service
  return (
    <div id={title.replaceAll(' ', '').toLowerCase()} className={`gridservice ${reverse?'rowreverse':''}`}>
    <div className={`content ${reverse}`}>
        <Iconbox icon={icon}/>
        <HashLink to={link+'#top'}>
         <h2>{title}</h2>
        </HashLink>
        <div className="texts">
          <div>
          {texts?.map(text=>{
            return <span>{text+'.'}</span>
          })}
          </div>
          <small className="graytext">
            {text}
          </small>
        </div>
    </div>
    <div className="img">
        <img src={img} alt=""/>
    </div>
  </div>
  )
}
export default Gridservice