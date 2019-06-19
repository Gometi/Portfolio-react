import React from 'react';

class Projects extends React.Component {

    render() {
        if (this.props.project) {
            const { title, img, details, link_site, link_github } = this.props.project
            return (
                <>
                    <h2 className="title">{title}</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img className="project_image  img-thumbnail" src={img} alt={title} />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <h3 className="project_details text-center">{details}</h3>
                        </div>

                    </div>

                    <div className="d-flex">
                        <a className="m-2 links" href={link_site}><h3 className="site m-2 p-2">Site</h3></a>
                        <a className="m-2 links" href={link_github}><h3 className="github m-2 p-2">Github</h3></a>
                    </div>
                    <br/>
                </>
            )
        }
        else { return (<></>) }

    }
}

export default Projects;