import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src="/assets/icons/logo.jpg" alt="logo" />
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="#home" className="nav-link" id="home-link">Home</a></li>
                        <li><a href="#about" className="nav-link" id="about-link">About me</a></li>
                        <li><a href="#portfolio" className="nav-link" id="portfolio-link">Portfolio</a></li>
                    </ul>
                </nav>
                <div className="contact-button">
                    <a href="#contact">Contact Me</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
