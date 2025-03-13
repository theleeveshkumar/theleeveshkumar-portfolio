import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-content">
        <a href="/" className="header-title">leeveshkumarweb</a>
        <nav className="header-nav">
          <div className="menu-icon" onClick={toggleMenu}>
            &#x22EE;
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
