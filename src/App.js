import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
//import Education from "./routes/Education";
import { Route, Routes } from "react-router-dom";
import Skills from "./routes/Skills";
import { Toaster} from "react-hot-toast";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Toaster/>
    </>
  );
}

export default App;
