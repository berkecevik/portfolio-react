import React, { useRef } from 'react';
import './Portfolio.css';

function Portfolio() {
    const sliderRef = useRef(null);

    const handleNext = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const slideWidth = slider.children[0].offsetWidth + 20; // Add margin if needed
            slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const slideWidth = slider.children[0].offsetWidth + 20; // Add margin if needed
            slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        }
    };

    return (
        <section id="portfolio" className="portfolio-section">
            <h2>Recent Projects</h2>
            <div className="slider-container">
                <div className="slider" ref={sliderRef}>
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
                        <h3>Project 2</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project2"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View in Github
                        </a>
                    </div>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View in Github
                        </a>
                    </div>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View in Github
                        </a>
                    </div>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View in Github
                        </a>
                    </div>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View in Github
                        </a>
                    </div>
                </div>
                <button className="prev" onClick={handlePrev}>←</button>
                <button className="next" onClick={handleNext}>→</button>
            </div>
        </section>
    );
}

export default Portfolio;
