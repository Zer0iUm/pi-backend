import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner from '../../../images/banner goró 1.png';
import banner1 from '../../../images/banner topo 1.png';
import banner2 from '../../../images/slide-indicator.png';

const DemoCarousel = () => {
	return (
		<Carousel
			showThumbs={false}
			dynamicHeight={false}
			autoPlay={true}
			showStatus={false}
		>
			<div>
				<img src={banner} style={{ height: '540px' }} />
			</div>
			<div>
				<img src={banner1} style={{ height: '540px' }} />
			</div>
			<div>
				<img src={banner2} style={{ height: '540px' }} />
			</div>
		</Carousel>
	);
};

export default DemoCarousel;
