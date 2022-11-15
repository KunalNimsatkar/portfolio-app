import React from "react";
import { useState } from "react";
import "../Navbar/navbar.css";
import logo from "../../Assests/images/favicon-ico.png"
import LinksItem from "./Linksitems/LinksItem";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  // MenuBar Button Conditional
  let toggleCheck = open ? "menu" : "menu openMenu";
  //  NavBar Conditional
  let Navtoggle = open ? "hidden" : "navlinks_container";

  return (
    <div className="Navbar_container">
      <div className="Navbar">
        <div className="logo_container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className={Navtoggle}>
          <LinksItem/>
        </div>
        <div className={toggleCheck} onClick={() => setOpen((open) => !open)}>
          <div>
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
