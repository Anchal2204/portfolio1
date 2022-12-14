import React from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import Work from"../components/Work";
import Skills from"../components/SkillsCard";
import About from"../components/AboutContent";
const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <About/>
        <Skills/>
        
        <Work/>
        <Footer/>
    </div>
  )
}

export default Home