import React from 'react';

class Projects extends React.Component {
    constructor(props){
        super()
        this.state = {
            titleInViewPort: false
        }
        this.titlePosition = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll(){
        //get element
      const title = this.titlePosition.current;
      //get the element's bottom position relative to the viewport
      const titlePosition = title.getBoundingClientRect().bottom +9;
      //change the state for 'titleInViewPort' to true if the element's postion is inside the viewport,  ie:(element's bottom postion is less than the viewport height)
      if(titlePosition < window.innerHeight){
          this.setState({titleInViewPort: true})
      }
      else {
        this.setState({titleInViewPort: false})
      }
    
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
        
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        if (this.props.project) {
            const { title, img, details, link_site, link_github } = this.props.project
            const titleAnimate = {
                hide: "title animated zoomOut",
                show: "title animated zoomIn"
            }
            return (
                <>
                    <h2 ref={this.titlePosition} className={this.state.titleInViewPort ? titleAnimate.show : titleAnimate.hide}>{title}</h2>
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