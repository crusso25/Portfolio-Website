import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section">
      <h1>About Me</h1>
      <hr />
      <div className="about-content">
        <div className="about-picture">
          <img src="/headshot.jpg" alt="Carson" className="profile" />
          <div className="about-links">
            <a
              href="https://www.linkedin.com/in/carson-russo-454302235/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-button"
            >
              LinkedIn
            </a>
            <a href="/CarsonResume.pdf" target="_blank" className="resume-button">
              Resume
            </a>
          </div>
        </div>
        <div className="about-info">
          <p>
          Hello! My name is Carson Russo, welcome to my portfolio. I am a
              Computer Science and Applied Discrete Mathematics double major at
              Virginia Tech. I have a deep interest in the world of computers
              and software, and am constantly trying to expand my knowledge of
              this field. In this portfolio you will find a list of skills that
              I have used in my career thus far, along with personal projects
              that portray these skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
