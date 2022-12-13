import React from "react";
import "./footer.css";
import { footerLinks } from "../ReuseComponent/Data";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <h2>kunal.nimsatkar@gmail.com</h2>
        <div className="links">
          {footerLinks.map(({ link, icon, aos, delay }, index) => {
            return (
              <a
                href={link}
                target={"__blank"}
                data-aos={aos}
                data-aos-delay={delay}
              >
                {icon} 
              </a>
            );
          })}
        </div>
        <p>
          CodeBy
          <a href="https://github.com/KunalNimsatkar/portfolio">
            {" "}
            Kunal Nimsatkar .
          </a>{" "}
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
