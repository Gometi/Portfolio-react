import React from 'react';
import '../css/aboutMe.css';
import SkillsAnimation from "./SkillsAnimation";
import { frontEnd, backEnd } from "./skills_list";
const Skills = ()=>{
    return(
        <>
        <div className="skills_section d-flex flex-column align-items-center">
                    <br />
                    <h1 className="section_title_skills">Skills</h1>
                    <div className="skills row justify-content-center ">
                        <SkillsAnimation className="col-6" skills={frontEnd} title="FRONT-END" />
                        <SkillsAnimation className="col-6" skills={backEnd} title="BACK-END" />
                    </div>
                </div>
        </>
    )
}
export default Skills;