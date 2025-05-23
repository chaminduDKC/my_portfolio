import React from 'react';
import ThemePattern from "../../assets/theme_pattern.svg";
import './works.css'
import works_data from '../../works.js';

const Work = () => {
    return (
        <div id="work" className="works">
            <div className="title">
                <h1>My Works</h1>
                <img src={ThemePattern} alt="title-image"/>
            </div>
            <div className="works-list">
                {works_data.map((work, index) => (
                    <div key={index} className="work">
                        <p>0{index+1}</p>
                        <h1>{work.title}</h1>
                        <img src={work.url} alt={work.title}/>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Work;