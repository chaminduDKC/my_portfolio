import React from 'react';
import ThemePattern from "../../assets/theme_pattern.svg";
import './works.css'
import services_data from "../../services.js";

const Work = () => {
    return (
        <div className="works">
            <div className="title">
                <h1>My Works</h1>
                <img src={ThemePattern} alt="title-image"/>
            </div>
            <div className="cards">
                {services_data.map(service => (
                    <div key={service.id} className="card">
                        <p className="no">0{service.id}</p>
                        <h1>{service.title}</h1>
                        <p className="description">{service.description}</p>
                        <div className="techs">
                            {service.technologies.map((tech, index)=>(
                                <p key={index}>{tech}</p>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Work;