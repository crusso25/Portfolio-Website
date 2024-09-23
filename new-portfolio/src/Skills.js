import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="section">
            <h1>Skills</h1>
            <hr />
            <div className="skills-container">
                {/* Languages */}
                <div className="skills-category">
                    <h3>Languages</h3>
                    <ul className="skills-list">
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                        <li>SQL</li>
                        <li>C</li>
                    </ul>
                </div>

                {/* Developer Tools */}
                <div className="skills-category">
                    <h3>Developer Tools</h3>
                    <ul className="skills-list">
                        <li>AWS</li>
                        <li>Postman</li>
                        <li>Git</li>
                        <li>BitBucket</li>
                        <li>Jira</li>
                        <li>Jenkins</li>
                        <li>VMware</li>
                    </ul>
                </div>

                {/* Libraries and Frameworks */}
                <div className="skills-category">
                    <h3>Libraries and Frameworks</h3>
                    <ul className="skills-list">
                        <li>Spring Boot</li>
                        <li>PostgreSQL</li>
                        <li>ReactJS</li>
                        <li>Bootstrap</li>
                        <li>NodeJS</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
