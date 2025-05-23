import React from 'react';
import './about.css'
import ThemePattern from '../../assets/theme_pattern.svg'
import AboutProfile from '../../assets/about_profile.svg'
const About = () => {
    return (
        <div id="About Me" className="about">
            <div className="title">
                <h1>About Me</h1>
                <img src={ThemePattern} alt="title-image"/>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={AboutProfile} alt="about-profile"/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <div className="skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /> 80% </div>
                        <div className="skill"><p>React</p><hr style={{width:"60%"}} />70% </div>
                        <div className="skill"><p>Angular</p><hr style={{width:"60%"}} />70% </div>
                        <div className="skill"><p>Node</p><hr style={{width:"50%"}} /> 60%</div>
                        <div className="skill"><p>Spring boot</p><hr style={{width:"50%"}} /> 60%</div>
                        <div className="skill"><p>Java</p><hr style={{width:"50%"}} /> 60%</div>
                    </div>
                </div>
            </div>
            <div className="achievements">
                <div className="about-achievements">
                    <h1>10+</h1>
                    <p>Tears Of Experience</p>
                </div>
                <hr/>
                <div className="about-achievements">
                    <h1>10+</h1>
                    <p>Enterprise Projects</p>
                </div>
                <hr/>
                <div className="about-achievements">
                    <h1>10+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    );
};

export default About;