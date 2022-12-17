import "./Footer.css"
import React from "react";
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaGithub, FaInstagram,} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>H.No 407 Sector 23 Sonipat, Haryana</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +91 78764-69626
            </h4>
          </div>
          
        </div>
        <div className="right">
          <div className="social">
            <h4> <a href="mailto:anchal.mittan@gmail.com"><FaMailBulk size={30}/></a>
            </h4>
            <h4><a href="https://www.facebook.com/anchal.mittan"><FaFacebook size={30}/></a>
            </h4>
            <h4><a href="https://www.linkedin.com/in/anchal-rani-993886235/"><FaLinkedin size={30}/></a>
            </h4>
            <h4><a href="https://github.com/Anchal2204"><FaGithub size={30}/></a>
            </h4>
            <h4><a href="https://www.instagram.com/anchal_mittan/?hl=en"><FaInstagram size={30}/></a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
