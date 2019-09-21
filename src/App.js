import React from 'react';
import './App.css';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ProjectBoard from "./components/ProjectBoard";
import Contact from "./components/Contact";
import {Parallax} from "react-scroll-parallax";

function App() {
  return (
    <div>
      <div className="position-fixed">
      <AboutMe/>
      </div>
      <Parallax y={[-20, 20]}><Skills/></Parallax>
      <Parallax  y={[0, 20]}><ProjectBoard/></Parallax>
      <Parallax  y={[60, 0]}><Contact/></Parallax>
    </div>
  );
}

export default App;
