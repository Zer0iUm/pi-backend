import React from 'react';
import Footer from '../../components/Footer';
import AgeVerification from './components/AgeVerification';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Slide from '../../components/slide/Slide';
import banner from '../../images/banner topo 1.png';

const Index = () => {
	return (
		<>
			<AgeVerification />
			<Navbar />
			{/* terminar isso depois | ver carrossel react */}
			<Slide banner={banner} type='Categoria' title='Lorem Ipsum' />
			<About />
			<Portfolio />
			<Footer />
		</>
	);
};

export default Index;
