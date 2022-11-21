import React from "react";
import "../about/about.css";
import Title from "../ReuseComponent/Title";

const About = () => {
  const arr = [
    "html",
    "css",
    "javascript",
    "bootstrap",
    "tailwindcss",
    "git",
    "github",
    "react",
    "redux",
  ];
  return (
    <>
      <div className="about_wrapper" id="about">
        <Title subtitle="get to know more" />
        <Title title="about me" />
        <div className="about_container">
          <div className="about">
            <h2>hello !</h2>
            <p>
              my name is <span>kunal nimsatkar</span> and i'm a passionate
              frontend web developer using web technologies to build amazing
              products and focusing on solving problems for different niches
              using the power of technology.
            </p>
            <p className="about_contact">
              i will love to hear from you. whether it's a projects,job
              opportunity,or just a chat. feel free to contact me.
            </p>
          </div>
          <div className="skills_container">
            <h2 className="skills_title">my skills</h2>
            <div className="skills">
              {arr.map((arr, index) => {
                return (
                  <div className="skills_list" key={index}>
                    {arr}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="division"></div>
    </>
  );
};

export default About;
