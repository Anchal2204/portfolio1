import "./WorkCard.css";
import React from 'react'
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";


const Work = () => {
  return (
    <div className="work-container">
        <h1>Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val, ind)=>{
            return(
                <WorkCard 
                key={ind}
                props={val}
                />
            )
          })}  
        </div>
    </div>
  )
}

export default Work;