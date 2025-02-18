import React, { useState } from 'react';
import './css/header.css';

const Header = () => {
     const [menuOpen, setMenuOpen] = useState(false);

     const toggleMenu = () => {
          setMenuOpen(!menuOpen);
     };

     return (
          <div className="header">
               <div className="header-content">
                    <h1 className="header-title">Welcome to My Portfolio</h1>
                    <nav className="header-nav">
                         <div className="menu-icon" onClick={toggleMenu}>
                              &#x22EE;
                         </div>
                         <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                              <li><a href="#home">Home</a></li>
                              <li><a href="#resume">Resume</a></li>
                              <li><a href="#skills">Skills</a></li>
                              <li><a href="#projects">Projects</a></li>
                              <li><a href="#contact">Contact</a></li>
                         </ul>
                    </nav>
               </div>
          </div>
     );
};

export default Header;