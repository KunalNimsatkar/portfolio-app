import "../Linksitems/linksitems.css";
import { BsArrowRightShort } from "react-icons/bs";
import CV from "../../../Assests/CV.pdf";

const LinksItem = () => {
  return (
    <div className="navlinks_wrapper">
      <ul className="navlinks">
        <li data-aos="zoom-in" data-aos-duration="500">
          <a href="#about">About</a>
        </li>
        <li data-aos="zoom-in" data-aos-duration="700">
          <a href="#projects">Projects</a>
        </li>
        <li data-aos="zoom-in" data-aos-duration="900">
          <a href="#contact">Contact</a>
        </li>
        <li className="btn" data-aos="zoom-in" data-aos-duration="1000">
          <a href="#home" download={CV}>
            Resume
            <BsArrowRightShort className="arrow" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinksItem;
