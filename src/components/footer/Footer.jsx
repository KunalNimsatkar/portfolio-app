import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <h2>kunal.nimsatkar@gmail.com</h2>
        <div className="links">
          <a
            href="https://facebook.com/profile.php?id=100010804427372"
            target={"__blank"}
          >
            {<FaFacebook />}
          </a>
          <a href="https://twitter.com/KNimsatkar" target={"__blank"}>
            {<FaTwitter />}
          </a>
          <a
            href="https://www.linkedin.com/in/kunal-nimsatkar-b21a13208"
            target={"__blank"}
          >
            {<FaLinkedin />}{" "}
          </a>
          <a href="https://github.com/KunalNimsatkar" target={"__blank"}>
            {<FaGithub />}
          </a>
        </div>
        <p>
          CodeBy<a href=""> Kunal Nimsatkar .</a> All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
