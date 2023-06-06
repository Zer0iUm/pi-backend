import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';
import AgeVerification from './components/AgeVerification';
import Navbar from './components/Navbar';
import banner from '../../images/banner topo 1.png';
import About from './components/About';

const index = () => {
	return (
		<>
			{/* <AgeVerification /> */}
			<Navbar />
			<section className='carrossel'>
				<div className='swiper'>
					<div className='swiper-wrapper'>
						<div className='swiper-slide'>
							<div>
								<img src={banner} alt='banner' />
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>CATEGORIA</p>
								<h2>LOREM IPSUM</h2>
								<p className='conteudo-dois'>
									Lorem ipsum dolor sit amet, consectetur
									<br />
									adipiscing elit.sed ipsum tempor, fermentum
									<br />
									lorem pellentesque,luctus tortor.
								</p>
								<Link to='#'>VER CATEGORIA</Link>
							</div>
						</div>
						<div className='swiper-slide'>
							<div>
								<img src={banner} alt='banner' />
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>CATEGORIA</p>
								<h2>LOREM IPSUM</h2>
								<p className='conteudo-dois'>
									Lorem ipsum dolor sit amet, consectetur
									<br />
									adipiscing elit.sed ipsum tempor, fermentum
									<br />
									lorem pellentesque,luctus tortor.
								</p>
								<Link to='#'>VER CATEGORIA</Link>
							</div>
						</div>
						<div className='swiper-slide'>
							<div>
								<img src={banner} alt='banner' />
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>CATEGORIA</p>
								<h2>LOREM IPSUM</h2>
								<p className='conteudo-dois'>
									Lorem ipsum dolor sit amet, consectetur
									<br />
									adipiscing elit.sed ipsum tempor, fermentum
									<br />
									lorem pellentesque,luctus tortor.
								</p>
								<Link to='../lists/listAcessories/index.html'>
									VER CATEGORIA
								</Link>
							</div>
						</div>
					</div>
					<div className='swiper-pagination'></div>

					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</section>

			<About />

			<main>
				<section id='about'>
					<h2>SOBRE NÓS</h2>
					<hr />
					<div id='container'>
						<div className='coluna'>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nunc posuere nisl sit amet erat
								sodales, ut dictum purus posuere. Pellentesque
								aliquam faucibus pharetra. Pellentesque eget
								efficitur sem. Suspendisse ut elit id mauris
								blandit ultrices. Cras ultricies nisi ut luctus
								aliquam. Nunc semper, mauris Link lobortis
								rutrum, tortor velit dapibus quam, Link
								scelerisque est tortor ut eros. Duis lectus
								augue, ultrices vel urna pharetra, consectetur
								aliquet tellus.
							</p>
							<p>
								Cras ultricies nisi ut luctus aliquam. Nunc
								semper, mauris Link lobortis rutrum, tortor
								velit dapibus quam, Link scelerisque est tortor
								ut eros. Duis lectus augue, ultrices vel urna
								pharetra, consectetur aliquet tellus.
							</p>
							<img
								alt='brindando'
								src='../../images/image 6.png'
							/>
						</div>
						<div className='coluna'>
							<img
								alt='dois caras contemplando cerveja'
								src='../../images/image 1.png'
							/>
							<p>
								Sed consequat odio at eros viverra, at ultricies
								turpis ullamcorper. Class aptent taciti sociosqu
								ad litora torquent per conubia nostra, per
								inceptos himenaeos.
							</p>
							<button className='btn-geral'>
								ENTRAR EM CONTATO COM A GORÓ
							</button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default index;
