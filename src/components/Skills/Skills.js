import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <h2>My Expertise</h2>
            <div className="skills-grid">
                <div className="skill">
                    <img src="/assets/icons/test.svg" alt="Strategy Icon" />
                    <h3>Strategy & Direction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="skill">
                    <img src="/assets/icons/test.svg" alt="Branding Icon" />
                    <h3>Branding & Logo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="skill">
                    <img src="/assets/icons/test.svg" alt="UI UX Icon" />
                    <h3>UI & UX Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="skill">
                    <img src="/assets/icons/test.svg" alt="Webflow Icon" />
                    <h3>Webflow Development</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;
