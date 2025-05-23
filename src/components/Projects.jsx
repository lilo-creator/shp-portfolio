// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Student Attendance System</h3>
        <p>An attendance tracking system using QR codes for university classrooms.</p>
        <p><strong>Technologies:</strong> React, Firebase</p>
        <a href="#">GitHub Link</a>
      </div>
      <div className="project">
        <h3>Personal Portfolio Website</h3>
        <p>Responsive personal portfolio showcasing my skills, education, and contact details.</p>
        <p><strong>Technologies:</strong> React, Tailwind CSS, Vercel</p>
        <a href="#">Live Demo</a>
      </div>
    </section>
  );
};

export default Projects;