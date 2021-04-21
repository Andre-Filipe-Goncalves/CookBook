import React from 'react'
import * as projects from "./Projects.json"
import MyProjectCards from "./MyProjectCards"

export default function MyProjects() {
    return (
        <div>
            <div className="project">
                {projects.projects.map((project) => (
                    <MyProjectCards key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
