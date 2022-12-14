import"./AboutContent.css";
import React from 'react'
import {Link} from "react-router-dom";
import React1 from"../assets/react1.jpg";
import React2 from"../assets/react2.jpg";
const AboutContent = () => {
  return (
    <div className="container" >
       <h1>About Me</h1> 
    
    <div className="about">
        <div className="left">
         <h1> Who I'm?</h1>
         <p>
         My name is Anchal. I'm a MERN-Full Stack Developer based in Haryana, India. 
         <br/><br/>I am passionate about delivering solutions that add to people's lives and at the same time challenge me. Improved my skills as a Front-End and Back-End developer.<br/>
         I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing layouts that they provide me. I'm always improving myself with each project I get my hands on.<br/>
         I am a dedicated person who pursues her dreams, hardworking and results oriented, I always seek to achieve my best version..</p>
         <Link to="/contact">
            <button className="btn">Contacts</button>
         </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutContent