import React from 'react'
import * as projects from "./Projects.json"
import MyProjectCards from "./MyProjectCards"
import './MyProject.css'

export default function MyProjects() {
    return (
        <div className="carholder">
            <div className="project">
                {projects.projects.map((project) => (
                    <MyProjectCards key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
