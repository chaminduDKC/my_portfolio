import React, {useState} from 'react';
import './navbar.css'
import logo from '../../assets/logo.svg'
import toggleOpen from '../../assets/menu_open.svg'
import toggleClose from '../../assets/menu_close.svg'

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
                {['Home', 'Services', 'Portfolio', 'About Me'].map((tab) => (
                    <li
                        key={tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </li>
                ))}
            </ul>
            <div >
                <img onClick={() => setOpen(!open)} className="toggle" src={open && toggleOpen} alt=""/>
                <div className="nav-connect">
                    Connect With Me
                </div>
            </div>

        </div>
    );
};

export default Navbar;