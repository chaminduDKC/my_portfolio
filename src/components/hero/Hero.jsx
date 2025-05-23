import React from 'react';
import './hero.css'
import ProfilePic from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";

const Hero = () => {
    return (
        <div id="Home"  className="hero">
            <img src={ProfilePic} alt="profile photo"/>
            <h1><span>I'm Alex Bennett,</span> frontend developer based in USA.</h1>
            <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            <div className="buttons">
                <AnchorLink href="#contact">
                    <div className="connect">Connect With Me</div>
                </AnchorLink>
                <div className="resume">My Resume</div>
            </div>
        </div>
    );
};

export default Hero;