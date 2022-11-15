import React from "react";
import "../projects/projects.css";
import ProjectsList from "./ProjectsList";
import Title from "../ReuseComponent/Title";

const Projects = () => {
  const List = [
    {
      title: "Netflix-Clone",
      desc: "Netflix-Clone using React-Js with IMDB Web API with Packages of Axios and Optimize Loading by React-lazy-load-image-component. A fully Responsive and Great User Experiance.",
      repo: "https://github.com/KunalNimsatkar/Netflix-App",
      link: "https://kunalnimsatkar.github.io/Netflix-App/",
      lang: ["ReactJs","axios","react-lazy-load-image-component","IMBD Web API"],
    },
    {
      title: "Notes",
      desc: "Simple React Note",
      repo: "https://github.com/KunalNimsatkar/React_Notes",
      link: "https://kunalnimsatkar.github.io/React_Notes/",
      lang: ["ReactJs"],
    },
    {
      title: "github user finder",
      desc: "a user freindly responsive github user finder webpage, a nicer look at your github profile and repo stats.",
      repo: "https://github.com/KunalNimsatkar/Responsive-Github-User-Finder",
      link: "https://kunalnimsatkar.github.io/Responsive-Github-User-Finder/",
      lang: ["html", "css", "javascript", "github api"],
    },
    {
      title: "traveling website",
      desc: "Responsive Travelling Website with Good UI interface By using AOS Animation",
      repo: "https://github.com/KunalNimsatkar/Travelling_Responsive_website",
      link: "https://kunalnimsatkar.github.io/Travelling_Responsive_website/",
    },
    {
      title: "Advice Generator",
      desc: "Created a Interactive Advice Generator Using HTML ,CSS and JavaScript (using Web API), A Frontend Mentor Challenge.",
      repo: "https://github.com/KunalNimsatkar/Advice_Generator_by_Vanilla_Javascript",
      link: "https://guileless-mooncake-2d03f7.netlify.app/",
    },
  ];
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
