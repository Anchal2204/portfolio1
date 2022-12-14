import "./HeroImg.css";

import React from 'react';
import IntroImg from "../assets/intro.jpg";
import {Link} from "react-router-dom";
import myImg from "../assets/anchal.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img"
            src= {IntroImg} alt= "IntroImg" />
        </div>
        
        <div className="content">
        <div className="img">
          <img className="my-img" src= {myImg} alt= "MyImg" />
        </div>
            <p> HI, I'M Anchal.</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;