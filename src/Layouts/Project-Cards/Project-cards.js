import React from "react";
import "./Project-cards.css";

export default function ProjectCards(props) {
    return (
        <div className="project-card-div">
            <div className="project-image">
                <img src={props.image} />
                <div className="project-links">
                  {Object.keys(props.links).map((element) => (
                      <a key={element} href={props.links[element]}>
                          {element}
                      </a>
                  ))}
                </div>
            </div>
            <div className="project-details">
                <div>
                    <h3 className="project-title">{props.title}</h3>
                    <div className="project-description">
                        <p>
                            {props.description.length > 200
                                ? props.description.slice(0, 200) + "..."
                                : props.description}
                        </p>
                    </div>
                    <ul className="project-tech-list">
                        {props.tech.map((items) => (
                            <li key={items}>{items}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
