import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
    // Function to scroll to the top of the page
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} onClick={scrollToTop} style={{ cursor: 'pointer' }}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae odit nihil nulla quod sed sunt perspiciatis fugiat rerum dolorum.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-222-333-4444</li>
                <li>contact@mail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        <span>© 2025 All rights reserved</span> 
      </p>
    </div>
  );
};

export default Footer;
