// src/components/Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>I'd love to hear from you! Please connect with me on social media.</p>
            
            <div className="social-media">
                <h3>Connect with me:</h3>
                <ul className="social-links">
                    <li>
                        <a href="https://www.linkedin.com/in/akhil-tadiparthi-01a668194/" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/linkedin.png" alt="LinkedIn" /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/akhil-tadiparthi" target="_blank" rel="noopener noreferrer">
                            <img src="/icons/github.png" alt="GitHub" /> GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Contact;
