import React, { useRef } from 'react';
import './contact.css';
import LinkedIn from '../../assets/Linkedin-logo-1.png';
import GitHub from '../../assets/github-logo-1.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_18rr8kk', 'template_7p55q1r', form.current, 'uCYW0s3x6Z5awL3SM')
            .then((result) => {
                console.log(result.text);
                alert('Email sent!')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
        };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any collaboration opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='from_name'/>
                    <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                    <textarea className="msg" name="message" rows="10" placeholder="Your Message"></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/simon-moore-50228736/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://github.com/simonmoore23" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub" className="link" />
                        </a>
                    </div>    
                </form>   
            </div>
        </section>
    );
}

    export default Contact