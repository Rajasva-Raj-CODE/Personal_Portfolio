import React, { useState } from "react";
import "./Navbar.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="logo">
        <p>Rajasva Raj</p>
        <img src={theme_pattern} alt="" />
      </div>

      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p onClick={() => setMenu("project")}>Projects</p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
