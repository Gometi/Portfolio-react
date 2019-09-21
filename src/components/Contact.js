import React from "react"
import "../css/projectList.css"

const Contact = () => {
    return (
        <div className="contact d-flex flex-column align-items-center" >
            <h1 className="section_title_contact">Contact</h1>
            <a className="contact-links" href="https://www.linkedin.com/in/ufuoma-gometi">
                <h2>LinkedIn</h2>
            </a>
            <a className="contact-links" href="https://github.com/Gometi">
                <h2>Github</h2>
            </a>
            <h2>Email: ufuomagometi@gmail.com</h2>
        </div>
    )
}
export default Contact;