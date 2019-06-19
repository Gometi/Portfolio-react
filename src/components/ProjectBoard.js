import React from 'react';
import '../css/projectList.css';
import Projects from './Projects';
import project_list from './project_list';

const ProjectBoard = ()=>{
    return(
        <div className="projects">
            <div className="project_container d-flex flex-column align-items-center">
            <h1 className="section_title_projects">Projects</h1>
            {project_list.map((project, index)=>{
                return(
                    <Projects key={index} project={project}/>
                )
            })}
            </div>
        </div>
    )
}
export default ProjectBoard;