import React from 'react';
import './App.css';
import AboutMe from "./components/AboutMe";
import ProjectBoard from "./components/ProjectBoard";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <AboutMe/>
      <br/>
      <ProjectBoard/>
      <Contact/>
    </div>
  );
}

export default App;
