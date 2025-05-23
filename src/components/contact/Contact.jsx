import React from 'react';
import './contact.css'
import ThemePattern from "../../assets/theme_pattern.svg";
import CallIcon from '../../assets/call_icon.svg'
import MailIcon from '../../assets/mail_icon.svg'
import LocationIcon from '../../assets/location_icon.svg'
import {Box, Button, TextField} from "@mui/material";

const Contact = () => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');

const clearFields = ()=>{
    console.log("Cleared fields")
        setName('');
        setMessage('');
        setEmail('');
}


    const onSubmit = async (event) => {
        console.log("submit called")
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "55a21867-55d7-49ea-9b7e-63b64e11aaaf");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Email sent successfully." + res.data);
            clearFields();
            console.log("Success", res);
        } else {
            console.error("Error", res);
        }
    };


    return (
        <div id="contact"  className="contact">
                <div className="title">
                    <h1>Contact Me</h1>
                    <img src={ThemePattern} alt="title-image"/>
                </div>
            <div className="contact-details">
                <div className="left">
                    <h1>Get in touch</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything
                        that you want me to work on. You can contact anytime.</p>
                    <div className="contacts">
                        <div className="detail">
                            <img src={MailIcon} alt="mail"/>
                            <p>chamindud061@gmail.com</p>
                        </div>
                        <div className="detail">
                            <img src={CallIcon} alt="call"/>
                            <p>076 45 73 054</p>
                        </div>
                        <div className="detail">
                            <img src={LocationIcon} alt="location"/>
                            <p>Matara, Sri lanka.</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name"/>
                        <label htmlFor="email">Your Email</label>

                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' name="email"/>
                        <label htmlFor="message">Your Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} id='message' name="message"></textarea>
                        <button type="submit">Submit Form</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;