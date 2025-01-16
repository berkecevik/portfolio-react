import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import './Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio-section">
            <h2>Recent Projects</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 }, // 2 slides on tablets
                    1024: { slidesPerView: 3 }, // 3 slides on desktops
                }}
            >
                <SwiperSlide>
                    <div className="project">
                        <h3>Reservation System</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/ReservationSystem"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Github
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <h3>Project 2</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project2"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Github
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Github
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Github
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="project">
                        <h3>Project 3</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <a
                            href="https://github.com/berkecevik/Project3"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on Github
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Portfolio;
