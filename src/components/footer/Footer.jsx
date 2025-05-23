import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <p>© {new Date().getFullYear()} Alex Bennett. All rights reserved.</p>
            </div>
            <div className="footer-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    );
};

export default Footer;