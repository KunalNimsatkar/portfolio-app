import React from "react";
import './title.css'

const Title = (props) => {
  return <><h1 className="title">{props.title}</h1>
  <p className="about_subtitle">{props.subtitle}</p></>;
};

export default Title;
