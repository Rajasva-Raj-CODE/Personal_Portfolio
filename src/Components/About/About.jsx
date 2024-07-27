import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>AWS</p> <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
