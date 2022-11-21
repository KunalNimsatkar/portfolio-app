import React from "react";
import "../projects/projects.css";
import ProjectsList from "./ProjectsList";
import Title from "../ReuseComponent/Title";
import {List} from "../ReuseComponent/Data";
const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        <Title title="Projects" />
        <ProjectsList List={List} />
      </div>
      <div className="division"></div>
    </>
  );
};

export default Projects;
