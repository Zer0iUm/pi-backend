import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Slide.module.css';

const Slide = props => {
	return (
		<Carousel
			showThumbs={false}
			dynamicHeight={false}
			autoPlay={true}
			showStatus={false}
		>
			<div className={styles.container}>
				<img src={props.banner} style={{ height: '540px' }} />
				<h3 className={styles.mini_title}>{props.miniTitle}</h3>
				<h1 className={styles.title}>{props.title}</h1>
				<p className={styles.text}>{props.text}</p>
			</div>
			<div className={styles.container}>
				<img src={props.banner1} style={{ height: '540px' }} />
				<h3 className={styles.mini_title}>{props.miniTitle1}</h3>
				<h1 className={styles.title}>{props.title1}</h1>
				<p className={styles.text}>{props.text1}</p>
			</div>
			<div className={styles.container}>
				<img src={props.banner2} style={{ height: '540px' }} />
				<h3 className={styles.mini_title}>{props.miniTitle2}</h3>
				<h1 className={styles.title}>{props.title2}</h1>
				<p className={styles.text}>{props.text2}</p>
			</div>
		</Carousel>
	);
};

export default Slide;
