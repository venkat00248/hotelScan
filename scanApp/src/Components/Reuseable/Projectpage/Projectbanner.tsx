import React from 'react'

function Projectbanner(props:any) {
  const {project} = props
  return (
    <div className="projectbanner">
    <div className="left">
      <div>
      <h2>
        <i className={project.icon}></i>
        <span>{project.title}</span>
      </h2>
      <small className="graytext">{project.type}</small>
      </div>
    </div>
    <div className="img">
      <img src={project.banner} alt=""/>
    </div>
  </div>
  )
}
export default Projectbanner