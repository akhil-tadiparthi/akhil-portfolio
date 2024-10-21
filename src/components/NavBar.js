// src/components/NavBar.js

import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            {/* <div className="navbar-left">Logo</div> */}
            <div className="navbar-center">
                <h1 className="navbar-name">Akhil Tadiparhi's Portfolio</h1>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </div>
            {/* <div className="navbar-right">Profile</div> */}
        </div>
    );
};

export default NavBar;

