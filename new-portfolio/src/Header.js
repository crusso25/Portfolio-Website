import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-theme', !isDarkMode);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img
          src={isDarkMode ? "/lightmode.png" : "/darkmode.png"}
          className={`dark-mode ${isDarkMode ? "light-icon" : ""}`}
          alt="Dark Mode Toggle"
          onClick={toggleDarkMode}
        />
      </div>
      <nav className="header-right">
        <ul className="nav-list">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
