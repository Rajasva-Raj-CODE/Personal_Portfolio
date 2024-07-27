import React from "react";
import "./Footer.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
        <h4>Rajasva Raj</h4>
        <img src={theme_pattern} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sunt!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter Your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy;2024 Rajasva Raj Shrivastav. All rights reserved.
        </p>
        <div className="footer-bottom-right">
         <p>Term of Services</p>
         <p>Privacy Policy</p>
         <p>Connect with me</p>
        </div>
    </div>
    </div>
  );
};

export default Footer;