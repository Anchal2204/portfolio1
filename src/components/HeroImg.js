import "./HeroImg.css";

import React from 'react';
import IntroImg from "../assets/intro.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src= {IntroImg} alt= "IntroImg" />
        </div>
        <div className="content">
            <p> HI, I'M A FRESHER.</p>
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