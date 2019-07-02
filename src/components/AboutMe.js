import React from "react";
import '../css/aboutMe.css';
import Skills from "./Skills";
import {frontEnd, backEnd} from "./skills_list";

const AboutMe = ()=> {

        return (
            <>
                <div className="intro d-flex flex-column align-items-center">
                    <h1>Gometi Ufuoma</h1>
                    <h1>Web Developer</h1>
                </div>
                <br />
                <div className="container1">
                    <div className="about_me d-flex flex-column align-items-center">
                        <img className="my_photo" src={require('../project_images/myPhoto.jpg')} alt="Ufuoma Gometi" />
                        <h3 className="brand w-75 text-center">
                            I am a web developer interested in creating meaningful projects and expressing myself creatively. I am eager to use my skills to create friendly user experiences while solving complex problems.
                </h3>
                    </div>
                    <div className="skills_section d-flex flex-column align-items-center">
                    <br />
                        <h1 className="section_title_skills">Skills</h1>
                        <div className="skills row justify-content-center ">
                         <Skills className="col-6" skills={frontEnd} title="FRONT-END"/>
                         <Skills className="col-6" skills={backEnd} title="BACK-END"/>
                        </div>
                    </div>
                </div>


            </>
        )
}
export default AboutMe;