import React from 'react';
import './contact.css';
import LinkedIn from '../../assets/Linkedin-logo-1.png';
import GitHub from '../../assets/github-logo-1.png'


const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any collaboration opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="10" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={LinkedIn} alt="LinkedIn" className="link" />
                        <img src={GitHub} alt="GitHub" className="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

    export default Contact