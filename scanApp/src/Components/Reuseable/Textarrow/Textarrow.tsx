import React from "react";
import "./Textarrow.css";

function Textarrow(props: any) {
  const { text = "Read More", icon = "fa fa-long-arrow-right", link } = props;

  return(
  // <Link to={link+'#top'} className="readmore">
  <div className="btns">
  <a className="readmore">
    <span>{text}</span>
    <i className={icon}></i>
  </a></div>);

  // </Link>
}
export default Textarrow;
