import React, { useContext, useState } from 'react'
import Iconbox from '../Icon/Iconbox'
import './Card.css'
// import {CopyToClipboard} fromd 'react-copy-to-clipboard';
// import { addNotification } from '../../Appfunctions';
// import { ContextApp } from '../../../ContextAPI';
// import Tooltip from '@material-ui/core/Tooltip';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Fade from '@material-ui/core/Fade';
// import { HashLink  as Link} from 'react-router-hash-link';
import Textarrow from '../Textarrow/Textarrow';
import { ContextApp } from '../../../ContextApi';

function Card(props:any) {
  const {themeshadow, iconlink, copy=false, learnmorebtn=false} = props
  const {text, icon, title, link} = props.card
  const {notifisystem} = useContext(ContextApp)
  const [copied, setCopied] = useState(false)
  
  // const LightTooltip = withStyles((theme) => ({
  //   tooltip: {
  //     backgroundColor: '#fff',
  //     color: 'var(--theme-color)',
  //     boxShadow: 'var(--light-shadow)',
  //     fontSize: 11,
  //   },
  //   arrow: {
  //     color: '#fff',
  //     boxShadow: 'var(--light-shadow)'
  //   }
  // }))(Tooltip);

  function determineCopy() {
    const parameters = {
      msg: 'Copied to clipboard!',
      icon: 'fad fa-copy',
      notifisystem
    }

    if(copy) return (
      //  <CopyToClipboard 
      //   text={text} 
      //   onCopy={()=>{
      //     setCopied(true);
      //     addNotification(parameters)
      //     setTimeout(()=>{
      //       setCopied(false)
      //     },4000)
      //     }}>
        //  <LightTooltip TransitionComponent={Fade} placement='top'  title={copied?'Copied':'Copy'}>
          <p style={{cursor: 'pointer'}}>{text}</p>
        //  </LightTooltip>
      //  </CopyToClipboard>
      )
    return <p>{text}</p>
  }

  return (
    <>
  {/* <Link to={link+'#top'} className={`card ${themeshadow?'themeshadowcard':''}`} data-aos='zoom-in'> */}
      <Iconbox icon={icon}/>
      <div>
        <h4>{title}</h4>
       {determineCopy()}
      </div>   
     {iconlink}
     {learnmorebtn && <Textarrow text='Learn More'/>}
     </>
  // {/* </Link> */}
  )
}
export default Card