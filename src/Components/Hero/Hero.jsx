import React from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        <span>I'm Rajasva Raj Shrivastav,</span> <br />
        FullStack Developer
      </h1>
      <p>
        I'm a full-stack developer with a passion for creating dynamic and
        responsive web applications. With a strong foundation in both front-end
        and back-end technologies, I thrive on solving complex problems and
        delivering high-quality solutions. My expertise includes JavaScript,
        React, Node.js, Express, and MongoDB, among other technologies.
      </p>
      <div className="hero-action">
      <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
