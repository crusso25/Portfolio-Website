import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div class="portfolio-container">
      <header>
        <h1>
          <nav className="navbar d-flex justify-content-around">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>
        </h1>
      </header>
      <div className="sections-wrapper">
        <section className="container-fluid" id="about">
          <h1 style={{ marginBottom: "4vh" }}>About me</h1>
          <div className="d-flex">
            <div className="picture d-flex flex-column align-items-center justify-content-center">
              <img
                src="/headshot.jpg"
                alt="Carson"
                id="headshot"
                className="profile"
              />
              <br />
              <br />
              <div className="d-flex">
                <button className="button">
                  <a
                    href="https://www.linkedin.com/in/carson-russo-454302235/"
                    className="no-link-style"
                  >
                    <svg
                      viewBox="55.005 23.8289 333.061 333.0491"
                      width="65"
                      height="65"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="Path_2520"
                        data-name="Path 2520"
                        d="M 338.789 307.609 L 289.44 307.609 L 289.44 230.326 C 289.44 211.898 289.111 188.174 263.773 188.174 C 238.07 188.174 234.138 208.253 234.138 228.985 L 234.138 307.604 L 184.788 307.604 L 184.788 148.679 L 232.164 148.679 L 232.164 170.398 L 232.827 170.398 C 242.491 153.881 260.452 144.017 279.57 144.726 C 329.587 144.726 338.809 177.626 338.809 220.426 L 338.789 307.609 Z M 129.106 126.955 C 107.063 126.96 93.281 103.098 104.298 84.006 C 115.319 64.909 142.877 64.909 153.904 83.996 C 156.418 88.35 157.739 93.29 157.739 98.312 C 157.744 114.13 144.923 126.955 129.106 126.955 M 153.781 307.609 L 104.38 307.609 L 104.38 148.679 L 153.781 148.679 L 153.781 307.609 Z M 363.391 23.851 L 79.582 23.851 C 66.17 23.702 55.169 34.446 55.005 47.858 L 55.005 332.844 C 55.164 346.266 66.165 357.02 79.582 356.876 L 363.391 356.876 C 376.839 357.046 387.881 346.292 388.066 332.844 L 388.066 47.837 C 387.876 34.4 376.834 23.656 363.391 23.831"
                        fill="#0b65c2"
                      ></path>
                    </svg>
                  </a>
                </button>
                <br />
                <a
                  href="/CarsonResume.pdf"
                  target="_blank"
                  className="icon-link"
                >
                  <div className="d-flex flex-column">
                    <img
                      src="/paper-icon.png"
                      alt="Paper Icon"
                      className="icon"
                    />
                    <p>Resume</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="info d-flex flex-column justify-content-start"
              style={{ marginRight: "20px" }}
            >
              Hello! My name is Carson Russo, welcome to my portfolio. I am a
              Computer Science and Applied Discrete Mathematics double major at
              Virginia Tech. I have a deep interest in the world of computers
              and software, and am constantly trying to expand my knowledge of
              this field. In this portfolio you will find a list of skills that
              I have used in my career thus far, along with personal projects
              that portray these skills.
            </div>
          </div>
        </section>
        <section id="projects">
          <h1 style={{ marginBottom: "4vh" }}>Projects</h1>
          <div className="project-list">
            <details>
              <summary>Study Master</summary>
              <div className="d-flex">
                <img src="/React.webp" className="small-logo" alt="React" />
                <img
                  src="/spring-boot.png"
                  className="small-logo"
                  alt="Spring Boot"
                />
                <img
                  src="/postgresql.png"
                  className="small-logo"
                  alt="PostgreSQL"
                />
                <img src="/aws.png" className="small-logo" alt="AWS" />
              </div>
              <p>
                Study Master is a full stack web application that I started to
                design during the summer of 2024. Study Master is aimed towards
                college students to help them prepare for their courses and
                exams. A user can upload their course syllabus schedule and
                information for exams, and Study Master will make a specified,
                detailed study guide for all exam topics, with practice problems
                and feedback for all topics covered.
              </p>
              <a
                href="https://www.studymaster.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website Link
              </a>{" "}
              <span>Last updated: Sep 1, 2024</span>
            </details>
            <details>
              <summary>Stock Market Predictor</summary>
              <div className="d-flex">
                <img src="/React.webp" className="small-logo" alt="React" />
                <img src="/python.png" className="small-logo" alt="python" />
                <img
                  src="/scikitlearn.svg"
                  className="small-logo"
                  style={{ objectFit: "contain" }} // Ensures the image maintains its aspect ratio
                  alt="scikit-learn"
                />
                <img src="/aws.png" className="small-logo" alt="AWS" />
              </div>
              <p>
                This is smaller project that I am doing to enhance my knowledge of data science. It is a work and progress and I plan on adding many more features, a demo of the dashboard can viewed by the link below.
              </p>
              <Link to="/predictordashboard">Predictor Dashboard Link</Link>{" "}
              <span>Last updated: Sep 3, 2024</span>
            </details>
          </div>
        </section>
        <section id="skills">
          <h1 style={{ marginBottom: "4vh" }}>Skills</h1>
          <div className="skills-container">
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

            <div className="skills-category">
              <h3>Developer Tools</h3>
              <ul className="skills-list">
                <li>AWS</li>
                <li>Postman</li>
                <li>Git</li>
                <li>Bit Bucket</li>
                <li>Jira</li>
                <li>Jenkins</li>
                <li>VMware</li>
              </ul>
            </div>

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
      </div>
    </div>
  );
};

export default Portfolio;
