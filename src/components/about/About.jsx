import React from "react";
import "../about/about.css";
import Title from "../ReuseComponent/Title";
import { arr, aboutContent } from "../ReuseComponent/Data";

const About = () => {
  const { title, para, contact } = aboutContent;
  return (
    <>
      <div className="about_wrapper" id="about">
        <Title subtitle="get to know more" />
        <Title title="about me" />
        <div className="about_container">
          <div className="about" data-aos="zoom-out" data-aos-duration="1000">
            <h2>{title}</h2>
            <p>{para}</p>
            <p className="about_contact">{contact}</p>
          </div>
          <div className="skills_container">
            <h2
              className="skills_title"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              my skills
            </h2>
            <div className="skills">
              {arr.map(({ title, aos, delay }, index) => {
                return (
                  <div
                    className="skills_list"
                    key={index}
                    data-aos={aos}
                    data-aos-delay={delay}
                  >
                    {title}
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
