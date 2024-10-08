// ExampleCarousel.js
import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos'
import 'aos/dist/aos.css'

const ExampleCarousel = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);
    return (
        <div className="h-screen sm:h-auto md:h-auto w-full sm:mt-16 md:mt-44 mt-28" data-aos="fade-bottom">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src="home1-slider1.png" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="home1-slider2.png" alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="home1-slider3.png" alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ExampleCarousel;
