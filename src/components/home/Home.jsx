import React from "react";
import "../home/home.css";
import Profile from "../../Assests/images/profile.svg";
import { homeContent } from "../ReuseComponent/Data";

const Home = () => {
  const { title, subtitle, desc, para, buttonContent } = homeContent;
  return (
    <>
      <div className="home_wrapper" id="home">
        <div
          className="home_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <a href="#home" data-aos="zoom-in" data-aos-duration="1000">
            <img src={Profile} alt="profile" className="profile" />
          </a>
          <h1 data-aos="zoom-in" data-aos-duration="1000">
            {title}
          </h1>
          <div className="content_text" data-aos="zoom-in" data-aos-duration="1000">
            <h2>{subtitle}</h2>
            <h2>{desc}</h2>
            <p>{para}</p>
          </div>
          <a href="#contact" className="btn_secondary">
            {buttonContent}
          </a>
        </div>
      </div>
      <div className="division"></div>
    </>
  );
};

export default Home;
