import "./HeroImg.css";

import React from "react";
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";
import myImg from "../assets/anchal.jpg";
import CV from "../assets/anchal-resume.pdf";
//import typewriter from "typewriter-effect";

const HeroImg = () => {
  /*{const animation ={
    h1:{
      initial:{
        x:"-100%",
        opacity:0,
        transition: "5s",
      },
      whileInView:{
        x:0,
        opacity:1,
      }
    }
  }}*/
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <div className="img">
          <img className="my-img" src={myImg} alt="MyImg" />
        </div>
        <p>
          {" "}
          <h3>HI, I'M Anchal.</h3>
        </p>

        <h1>Full Stack Developer</h1>

        <div>
          <a href={CV} download className="btn">
            Resume
          </a>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
