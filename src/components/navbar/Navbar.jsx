import React, {useState} from 'react';
import './navbar.css'
import logo from '../../assets/logo.svg'
import toggleOpen from '../../assets/menu_open.svg'
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [open, setOpen] = React.useState(true);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <ul className="nav-menu">
                {['Home', 'About Me', 'Services','Portfolio'].map((tab) => (
                    <AnchorLink href={`#${tab}`}>
                    <li
                        key={tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                    </AnchorLink>
                ))}
            </ul>
            <div >
                <img onClick={() => setOpen(!open)} className="toggle" src={open && toggleOpen} alt=""/>

                <AnchorLink href="#contact">
                    <div className="nav-connect">
                        Connect With Me
                    </div>
                </AnchorLink>


        </div>

        </div>
    );
};

export default Navbar;