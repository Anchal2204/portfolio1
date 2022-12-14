import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import SkillsCard from '../components/SkillsCard';

const Skills = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Skills" text="Skills I know"/>
      <SkillsCard/>
      <Footer/>
    </div>
  )
}

export default Skills