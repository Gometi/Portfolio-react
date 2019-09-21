import React from "react";
import '../css/aboutMe.css';

const AboutMe = () => {

    return (
        <div className="about-me-section ml-5 mr-5 ">
            {/* <div className="intro d-flex flex-column align-items-center">
                <h1>Gometi Ufuoma</h1>
                <h1>Web Developer</h1>
            </div>
            <br /> */}
            <div className="about-me d-flex ">
                <div className="section-intro d-flex flex-column align-items-center">
                    <h1>Gometi Ufuoma</h1>
                    <h1>Web Developer</h1>
                    <br />
                    <h3 className="brand text-center">
                        I am a web developer interested in creating meaningful projects and expressing myself creatively. I am eager to use my skills to create friendly user experiences while solving complex problems.
                </h3>
                <br/>
                </div>
                <div className="image-and-links">
                    <img className="my-photo img-fluid img-thumbnail" src={require('../project_images/myPhoto.jpg')} alt="Ufuoma Gometi" />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/ufuoma-gometi">
                            <img className="linkedIn-image" src={require("../project_images/linkedIn.png")} alt="linkedIn" />
                        </a>
                        <a href="https://github.com/Gometi">
                            <img className="github-image" src={require("../project_images/github.gif")} alt="github" />
                        </a>


                    </div>
                </div>

            </div>

        </div>
    )
}
export default AboutMe;