import { AiFillGithub } from "react-icons/ai";
import { CgArrowTopRightR } from "react-icons/cg";

const ProjectsList = (props) => {
  const List = props.List;
  return (
    <div className="projects_wrapper">
      {List.map(({ repo, link, title, desc, lang }, index) => {
        return (
          <div className="projects_container" key={index}>
            <div className="projects_links">
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="github_icon" />
              </a>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <CgArrowTopRightR className="live_icon" />
              </a>
            </div>
            <div className="projects_context">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
            <div className="projects_language">
              {/* <ul>
                {lang.map((lang) => {
                  return <li>{lang}</li>;
                })}
              </ul> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProjectsList;
