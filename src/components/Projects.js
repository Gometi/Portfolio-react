import React from 'react';
import {titleAnimate, imageAnimate, detailsAnimate, siteButton, githubButton} from './animate';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            titleInViewPort: false,
            projectInViewPort: false,
            buttonsInViewPort: false
        }
        this.title = React.createRef();
        this.project = React.createRef();
        this.buttons = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.getElementPosition = this.getElementPosition.bind(this);
    }
    handleScroll() {
    this.getElementPosition(this.title, "titleInViewPort");
    this.getElementPosition(this.project, "projectInViewPort");
    this.getElementPosition(this.buttons, "buttonsInViewPort");
    }

    getElementPosition(el, s) {
        //get element
        const element = el.current;
        //get the element's bottom position relative to the viewport
        const midPostion = (element.getBoundingClientRect().bottom -  element.getBoundingClientRect().top) / 2;
        const elementPosition = element.getBoundingClientRect().bottom - midPostion;
        //get the name of the state
        const state = s
        //change the state to true if the element's postion is inside the viewport,  ie:(element's bottom postion is less than the viewport height)
        
        if (elementPosition < window.innerHeight) {
            this.setState({ [state]: true })
        }
        else {
            this.setState({ [state]: false })
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll)

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        if (this.props.project) {
            const { title, img, details, link_site, link_github } = this.props.project
            return (
                <>
                    <h2 ref={this.title} className={this.state.titleInViewPort ? titleAnimate.show : titleAnimate.hide}>{title}</h2>
                    <div ref={this.project} className="row justify-content-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img className={this.state.projectInViewPort ? imageAnimate.show : imageAnimate.hide} src={img} alt={title} />
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <h3 className={this.state.projectInViewPort ? detailsAnimate.show : detailsAnimate.hide}>{details}</h3>
                        </div>

                    </div>

                    <div ref={this.buttons} className="d-flex">
                        <a className="m-2 links" href={link_site}><h3 className={this.state.buttonsInViewPort ? siteButton.show : siteButton.hide}>Site</h3></a>
                        <a className="m-2 links" href={link_github}><h3 className={this.state.buttonsInViewPort ? githubButton.show : githubButton.hide}>Github</h3></a>
                    </div>
                    <br />
                </>
            )
        }
        else { return (<></>) }

    }
}

export default Projects;