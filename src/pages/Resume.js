// src/pages/Resume.js

import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2>Full Stack Work:</h2>
            <iframe
                src="/assets/Akhil_Tadiparthi_ResumeFS.pdf" // Updated path
                width="100%"
                height="600px"
                title="Full Stack Resume"
            />

            <h2>AI/ML Work:</h2>
            <iframe
                src="/assets/Akhil_Tadiparthi_Resume1.pdf" // Updated path
                width="100%"
                height="600px"
                title="AI/ML Resume"
            />
        </div>
    );
};

export default Resume;
