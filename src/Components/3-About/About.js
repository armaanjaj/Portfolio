import React from "react";
import Data from "../../Content/About";
import "./About.css";

export default function About() {
    return (
        <div id="#about" className="about-container-p">
            <section id="about" className="about">
                <h2 className="about-container-head">01. About</h2>
                <div className="about-inner">
                    <div className="about-inner-left">
                        <div>
                            <p>{Data.past}</p>
                            <p>{Data.present}</p>
                            <p>{Data.future}</p>
                            <p>{Data.technologies.headline}</p>
                            <ul>
                                {Data.technologies.tech.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="about-inner-right"></div>
                </div>
            </section>
        </div>
    );
}
