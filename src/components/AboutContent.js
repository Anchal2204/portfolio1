import"./AboutContent";
import React from 'react'
import {Link} from "react-router-dom";
import React1 from"../assets/react1.jpg";
import React2 from"../assets/react2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
         <h1> Who I'm?</h1>
         <p>Full Stack Developer. Designing, developing and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack developer.</p>
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
  )
}

export default AboutContent