import React from 'react'
import { Link } from "react-router-dom"
import './MyProject.css'

export default function MyProjectCards({ project }) {
    return (
            <div className="card">
                <h1>{project.header}</h1>
                <br/><br/>
            <div className="cardphoto">
                <img src={project.img} alt="" className="projectimg"/>
            </div>
            <br/><br/>
            <div className="cardtext">
                <p>{project.description}</p>
            </div>
            <br/><br/>
            <Link to={{ pathname: project.link }} target='_blank'>
                <button className="button">Project</button>
            </Link>
            <br/><br/><br/>
        </div>
    )
}
