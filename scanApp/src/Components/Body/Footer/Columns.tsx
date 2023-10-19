import React, { useContext, useState } from 'react'
import './Columns.css'
// import {CopyToClipboard} from 'react-copy-to-clipboard';
import { addNotification } from '../../Appfunctions';
import { ContextApp } from '../../../ContextAPI';

function Columns (props:any) {
  const {column} = props
  const {notifisystem} = useContext(ContextApp)
  const [expanded, setExpanded] = useState(false)
  function determineLink(link:any){
    if(column.copy) {
      const parameters = {
        msg: 'Copied to clipboard!',
        icon: 'fad fa-copy',
        notifisystem
      }
      return (
      // <CopyToClipboard text={link.text} onCopy={()=>addNotification(parameters)}>
      <>
          {/* target={!link.notblank&&'__blank'}  */}
          <a href={link.link}  className='linkcont'>
          <i className={link.icon}></i>
          <span>{link.text}</span>
          </a>
          </>
      // </CopyToClipboard>
      )
    }
    if(column.blank) {
      return (
        // target={!link.notblank&&'__blank'}
        <a href={link.link}   className='linkcont'>
          <i className={link.icon}></i>
          <span>{link.text}</span>
        </a>
      )
    }
    return (
      // <HashLink smooth to={link.link+'#top'}>
      <>
        <i className={link.icon}></i>
        <p className='linkcont'>{column.linktitle?link.title:link.text}</p></>
    //  </HashLink>
    )
  }
  return <div className="col">
      <div className='expandtitle' onClick={()=>setExpanded(!expanded)}>
      <h3>{column.title}</h3>      
      {!column.logo&&<i className={`fal fa-arrow-${expanded?'right transformed':'right'}`}></i>}
      </div>
      <div className={expanded?"expand expanded":'expand'}>
      <div className='columnlinks' > {column.links?.map((link:any)=>{
       return determineLink(link)
           })}
       </div> 
      </div>
 </div>
}

export default Columns