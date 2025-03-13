import React from 'react';
import heroImage from '../assets/heroImage.jpg';
import './css/home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero" className="hero-image" />
      <h1 className="hero-title">Welcome to My Portfolio</h1>
      <p className="hero-subtitle">Discover my projects and skills</p>
      <a href='/contact' className="hero-button">Contact</a>
    </div>
  );
};

export default Home;
