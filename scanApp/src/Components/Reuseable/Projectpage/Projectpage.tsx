import React, { useEffect, useState, useRef, useContext } from 'react'
import Apexchart from '../Apexchart/Apexchart'
import Donut from '../Apexchart/Donut'
import Motiondiv from '../Motiondiv/Motiondiv'
import Item from './Item'
import Projectbanner from './Projectbanner'
import './Projectpage.css'
import { CSSTransition } from "react-transition-group";
// import ScrollContainer from 'react-indiana-drag-scroll';
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import { addNotification } from '../../Appfunctions'
import AppButton from '../Button/Button'
import { ContextApp } from '../../../ContextApi'


const  Projectpage = (props:any) => {
  const [project, setProject] = useState(props.project)
  const [modal, setModal] = useState(false)
  const [img, setImg] = useState('')
  const [zoom, setZoom] = useState(100)
  const {notifisystem} = useContext(ContextApp)
  const [demo, setDemo] = useState(false)
  return ( 
    <Motiondiv html={
    <>
    <div className="projectpages">
    <Projectbanner project={project}/>
    <div className="servicescontainer">
      <div className='projectsectiontop'>
      <div className="itemcontainer">
        <h3>Project Overview</h3>
        <div>
          <Item text={project.industry} title='Industry'/>
          <Item text={project.type} title='Project Type'/>
          <Item text={project.service} title='Service'/>
        </div>
      </div>
      <div className="itemcontainer">
        <h3>Project Information</h3>
        <div>
          <Item text={project.languages} title='Technologies'/>
          <Item text={project.colors} title='Color Palette'/>
        </div>
      </div>
      </div>
      <div className="projectsectiontop">
          <Donut colors={project.colors} series={project.donut} title='Project Attributes'/>
          <Apexchart series={project.area} title='Project Commits'/>
      </div>
      <div className="projectsectiontop">
        <div className="description">
          <h3>Project Description</h3>
          <small className="graytext">{project.text}</small>
        </div>
        <div></div>
      </div>
      <div  className="projectimgs" >
        <h3>Project Snapshots</h3>
        <div className="imgcont">
          {project.featuredimg.map((img:any )=>{
            return <img alt='' src={img} onClick={()=>{setImg(img); setModal(true)}}/>
          })} 
        </div>
      </div>
      <div className="projectdemo">
        <h3>Project Demo</h3>
          {/* <CopyToClipboard text={project.url} onCopy={()=>addNotification({notifisystem, msg: 'Copied to clipboard!', icon: 'fad fa-copy'})}> */}
            <input value={project.url}/>
          {/* </CopyToClipboard> */}
          <AppButton clickEvent={()=>setDemo(!demo)} text={!demo?'Show Interactive Demo':'Hide Demo'}/>
         {demo&& <iframe src={project.url} title='a'></iframe>}
      </div>
    </div>
  </div>
  <CSSTransition in={modal} unmountOnExit classNames='modal' timeout={300}>
      <div className="modal">
        <div className="controls">
         <i className="fad fa-search-minus" onClick={()=>setZoom(prev=>prev-10)}></i>
         <i className="fad fa-search" onClick={()=>setZoom(100)}></i>
         <i className="fad fa-search-plus" onClick={()=>setZoom(prev=>prev+10)}></i>
        </div>
         {/* <ScrollContainer className='imgcont' hideScrollbars={true}> */}
          <img  src={img} alt="" style={{width: zoom+'%'}}/>
          {/* </ScrollContainer> */}
        <i className="fad fa-times" onClick={()=>{setModal(false); setZoom(100)}}></i>
      </div>
  </CSSTransition>
    </>
    }
    />
  )
}
export default Projectpage