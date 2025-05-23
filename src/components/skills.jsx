// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div>
          <h3>Technical Skills</h3>
          <ul>
            <li>Networking knowledge</li>
            <li>Flexible in hardware and software</li>
          </ul>
        </div>
        <div>
          <h3>Soft Skills</h3>
          <ul>
            <li>java script</li>
            <li>python</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;