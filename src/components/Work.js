import "./WorkCard.css";
import React from 'react'
import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="projects-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val, ind)=>{
            return(
                <WorkCard 
                key={ind}
                imgs={val.imgs}
                title= {val.title}
                text={val.text}
                source={val.Source}
                />
            )
          })}  
        </div>
    </div>
  )
}

export default Work;