import"./Footer.css";

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin} from"react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
         <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>H.No 407 Sector 23 Sonipat, Haryana</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone"> 
            <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>+91 78764-69626
            </h4>
            </div>
            <div className="email"> 
            <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>anchal.mittan22@gmail.com
            </h4>
            </div>
         </div>
         <div className="right">
            <div className="social">
            <h4><FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>Anchal Mittan</h4>
            <h4><FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>Anchal Rani</h4>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer