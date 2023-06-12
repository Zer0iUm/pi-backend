import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from "../../../images/banner goró 1.png"
import banner1 from "../../../images/banner topo 1.png"
import banner2 from "../../../images/slide-indicator.png"

const DemoCarousel = () => {
        return (
            <Carousel showThumbs = {false}>
                <div>
                    <img src= {banner} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2}/>
                </div>
            </Carousel>
        );
    
};

export default DemoCarousel

