import React from 'react';
import ThemePattern from "../../assets/theme_pattern.svg";
import './service.css'
import services_data from "../../services.js";

const Service = () => {
    return (
        <div id="Services"  className="services">
            <div className="title">
                <h1>Services</h1>
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

export default Service;