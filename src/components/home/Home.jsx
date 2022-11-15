import React from "react";
import "../home/home.css";
import Profile from "../../Assests/images/profile.svg";

const Home = () => {
  return (
    <>
      <div className="home_wrapper" id="home">
        <div className="home_container">
          <a href="#home">
            <img src={Profile} alt="profile" className="profile" />
          </a>
          <h1>Hi I'm Kunal</h1>
          <div className="content_text">
            <h2>Building User </h2>
            <h2> Friendly Website and Experience</h2>
            <p>I code beautifully simple things, and I love what I do.</p>
          </div>
          <a href="#contact" className="btn_secondary">
            connect with me
          </a>
        </div>
      </div>
      <div className="division"></div>
    </>
  );
};

export default Home;
