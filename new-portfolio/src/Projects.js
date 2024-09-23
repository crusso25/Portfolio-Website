import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
            name: "Study Master",
            logo: "/studymaster.ico",
            website: "https://www.studymaster.io",
            websiteName: "Link",
            github: "https://github.com/crusso25/StudyMaster-Frontend-Public",
            dates: "June 2024",
            techStack: [
                { src: "/React.webp", alt: "React" },
                { src: "/spring-boot.png", alt: "Spring" },
                { src: "/postgresql.png", alt: "Postgres" },
                { src: "/aws.png", alt: "AWS" }
            ],
            description: `Study Master is a full stack web application that I started to
                design during the summer of 2024. Study Master is aimed towards
                college students to help them prepare for their courses and
                exams. A user can upload their course syllabus schedule and
                information for exams, and Study Master will make a specified,
                detailed study guide for all exam topics, with practice problems
                and feedback for all topics covered.`
        },
        {
            name: "Stock Market Predictor",
            logo: "/stocks.png",
            website: "",
            websiteName: "",
            github: "https://github.com/crusso25/Stock-Market-Predictor-Backend",
            dates: "Sep 2024",
            techStack: [
                { src: "/React.webp", alt: "React" },
                { src: "/python.png", alt: "Python" },
                { src: "/scikitlearn.svg", alt: "Scikit-Learn" },
            ],
            description: `This is a smaller project that I am working on to enhance my knowledge in data science. 
                          It is a work in progress and I plan on adding many more features.`
        }
    ];

    const handlePrev = () => {
        setCurrentProject((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentProject((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const { name, logo, website, websiteName, github, dates, techStack, description } = projects[currentProject];

    return (
        <section className="section">
            <h1>Projects {`(` + (currentProject + 1) + '/2)'}</h1>
            <hr />
            <div className="project-content">
                <div className="project-item">
                    <div className="project-left">
                        <div className="project-info">
                            <h2 className="project-name">{name}</h2>
                            <img src={logo} alt="Project Logo" className="project-logo" />
                            <div className="project-links">
                                <div className="project-link">
                                    <img src="/url-link.png" alt="Website" className="link-logo" />
                                    <a href={website} target="_blank" rel="noopener noreferrer">
                                        {websiteName}
                                    </a>
                                </div>
                                <div className="project-link">
                                    <img src="/github.svg" alt="GitHub" className="link-logo" />
                                    <a href={github} target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                            <p className="project-dates">
                                <img src="/calendar.png" alt="Calendar" className="link-logo" /> {dates}
                            </p>
                        </div>
                        <div className="project-tech-stack">
                            <h3>Tech Stack:</h3>
                            <div className="tech-stack-list">
                                {techStack.map((tech, index) => (
                                    <img key={index} src={tech.src} alt={tech.alt} className="tech-logo" />
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="project-right">
                        <p className="project-description">{description}</p>
                    </div>
                </div>
                <div className="project-navigation">
                    <button onClick={handlePrev}>Prev</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
