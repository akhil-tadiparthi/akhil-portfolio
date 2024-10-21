// src/App.js

import React from 'react';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default App;
