import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <p>Hey, I am Berke</p>
                    <h1>
                        I create <span className="highlight">Portfolio websites</span> to be
                        <span className="highlight">deployed</span>.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique.
                    </p>
                    <button className="hero-button">Get In Touch</button>
                </div>
                <div className="hero-image">
                    <img src="/assets/images/image-hero.png" alt="Hero" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;