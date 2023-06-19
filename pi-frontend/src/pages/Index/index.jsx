import React from 'react';
import Footer from '../../components/Footer';
import AgeVerification from './components/AgeVerification';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Slide from '../../components/Slide/Slide';

const Index = () => {
	return (
		<>
			<AgeVerification />
			<Navbar />
			<Slide
				banner={`http://localhost:3000/img/banner topo 1.png`}
				banner1={`http://localhost:3000/img/banner topo-casquinho 2.png`}
				banner2={`http://localhost:3000/img/banner topo-copo 1.png`}
				height='868px'
				miniTitle='VOCÊ QUER UMA LATINHA?'
				miniTitle1='BATE E VOLTA'
				miniTitle2='TIM-TIM, TIM-TIM!'
				title='LEVE UMA GORO MAIS LEVE'
				title1='CASQUINHO RETORNÁVEL'
				title2='UM BRINDE PRA ELA'
				text='Conheça a nossa Goró versão latinhas de 330ml. Mais leve e compacta para levar onde você quiser!'
				text1='Se você é fã dos nostálgicos cascos de cerveja conheça os nossos “casquinhos” de 000ml.'
				text2='A bebida é importante, mas o tintilar do copo sela os votos. Confira nossos copos personalizados.'
			/>
			<About />
			<Portfolio />
			<Footer />
		</>
	);
};

export default Index;
