// src/components/NavBar.js

import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div class="navbar">
            {/* <div class="navbar-left">Logo</div> */}
            <div class="navbar-center">
            <h1 class="navbar-name">Akhil Tadiparhi's Portfolio</h1>
                <ul class="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
            </div>
            {/* <div class="navbar-right">Profile</div> */}
        </div>
    );
};

export default NavBar;
