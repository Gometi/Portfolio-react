import React from "react";

class Skills extends React.Component {
    render() {
        const  titleFont = {fontFamily: "cursive"};
        const style_express = {
            background: "white",
            animationDuration: "1.3s"
        }
        return (
            <div className="d-flex flex-column align-items-center m-4">
                <h2 style={titleFont}>{this.props.title}</h2>
                <div className="row justify-content-center">
                    {this.props.skills.map((skill, index) =>
                        <div key={index} className="text-center m-1" >
                            <img className={skill.animate} style={skill.name === "express" ? style_express : {animationDuration: "1.3s"}} src={skill.img} alt={skill.name} />
                            <p style={{color: "white"}}>{skill.name === "express" ? "" : skill.name}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default Skills;