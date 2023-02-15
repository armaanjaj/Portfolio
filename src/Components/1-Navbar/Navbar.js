import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <header className="navbar-container-p">
            <nav className="navbar-nav-container">
                
                {/* // Logo container */}
                <div className="navbar-component-left">
                    <a href="/" className="navbar-logo">Armaan</a>
                </div>

                {/* // Navigation container */}
                <div className="navbar-component-right"> 
                    <ol>
                        <li>
                          <a href="#about">About</a>
                        </li>
                        <li>
                          <a href="#experience">Experience</a>
                        </li>
                        <li>
                          <a href="#skills">Skills</a>
                        </li>
                        <li>
                          <a href="#contact">Contact</a>
                        </li>
                    </ol>
                    <div className="resume-button">
                      <a href="Resume.pdf" target={"_blank"}>Resume</a>
                    </div>
                </div>

                {/* // Hamburger */}
                <div className="navbar-component-mobile">
                    <div className="navbar-navigation-mobile-hamburger">
                      <a href="/#resume" target={"_blank"}>Resume</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
