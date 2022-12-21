import React from "react";
import ProjectCards from "../../Layouts/Project-Cards/Project-cards";
import Data from '../../Content/Projects'
import "./Projects.css";

export default function Projects() {
    return (
        <div className="projects-container-p">
            <section id="experience" className="projects">
                <h2 className="projects-container-head">02. Experience</h2>
                <div className="projects-inner">
                  {Object.keys(Data).map(data => (
                    <ProjectCards
                      title={Data[data].title}
                      description={Data[data].description}
                      tech={Data[data].tech}
                      links={Data[data].links}
                      image={Data[data].image}
                    />
                  ))}
                </div>
            </section>
        </div>
    );
}
