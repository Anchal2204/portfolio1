import "./SkillsCard.css";
import React from 'react'
import Marquee from "react-fast-marquee"
import { skillsData } from '../data/skillsData';
import {skillsImage} from "../utils/skillsImage";

const SkillsCard = () => {
  const skillBoxStyle = {
    backgroundColor: "black",
    boxShadow: `0px 0px 12px`
}
  return (
    <div className="skills" style={{ backgroundColor: "black" }}>
                <h2 style={{ color: "white" }}>Skills</h2>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{ color: "white" }}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}
  export default SkillsCard;