import React from 'react';
import './hero.css'
import ProfilePic from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className="hero">
            <img src={ProfilePic} alt="profile photo"/>
            <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
            <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            <div className="buttons">
                <div className="connect">Connect With Me</div>
                <div className="resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;