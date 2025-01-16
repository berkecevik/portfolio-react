import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <h2>Recent Projects</h2>
            <div className="slider-container">
                <div className="slider">
                    <div className="project">
                        <h3>Reservation System</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a 
                            href="https://github.com/berkecevik/ReservationSystem" 
                            className="project-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View in Github
                        </a>
                    </div>
                    <div className="project">
                        <h3>Reservation System</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a 
                            href="https://github.com/berkecevik/ReservationSystem" 
                            className="project-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View in Dribbble
                        </a>
                    </div>
                    <div className="project">
                        <h3>Reservation System</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a 
                            href="https://github.com/berkecevik/ReservationSystem" 
                            className="project-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View in Dribbble
                        </a>
                    </div>
                    <div className="project">
                        <h3>Reservation System</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a 
                            href="https://github.com/berkecevik/ReservationSystem" 
                            className="project-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View in Dribbble
                        </a>
                    </div>
                    <div className="project">
                        <h3>Reservation System</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a 
                            href="https://github.com/berkecevik/ReservationSystem" 
                            className="project-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View in Dribbble
                        </a>
                    </div>
                </div>
                <button className="prev">←</button>
                <button className="next">→</button>
            </div>
        </section>
    );
}

export default Portfolio;
