import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/slide/Slide';
import banner from '../../images/banner goró 1.png';

import './style.css';

const Home = () => {
	return (
		<>
			<Header />
			<Slide banner={banner} type='Acessórios' title='Goro Style' />
			{/* <section className='carrossel'>
				<div className='swiper'>
					<div classNaACESSÓRIOSme='swiper-wrapper'>
						<div className='swiper-slide'>
							<div>
								<img
									src='/img/banner goró 1.png'
									alt='banner'
								/>
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'></p>
								<h2>GORÓ STYLE</h2>
								<p className='conteudo-dois'>
									Chique e confortável! Garanta a camiseta que
									<br />
									combina com a sua cerveja favorita.
								</p>
								<Link to='#'>VER CAMISETAS</Link>
							</div>
						</div>
						<div className='swiper-slide'>
							<div>
								<img
									src='/img/banner goró 1.png'
									alt='banner'
								/>
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>ACESSÓRIOS</p>
								<h2>GORÓ STYLE</h2>
								<p className='conteudo-dois'>
									Chique e confortável! Garanta a camiseta que
									<br />
									combina com a sua cerveja favorita.
								</p>
								<Link to='#'>VER CAMISETAS</Link>
							</div>
						</div>
						<div className='swiper-slide'>
							<div>
								<img
									src='/img/banner goró 1.png'
									alt='banner'
								/>
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>ACESSÓRIOS</p>
								<h2>GORÓ STYLE</h2>
								<p className='conteudo-dois'>
									Chique e confortável! Garanta a camiseta que
									<br />
									combina com a sua cerveja favorita.
								</p>
								<Link to='../lists/listAcessories/index.html'>
									VER CAMISETAS
								</Link>
							</div>
						</div>
					</div>
					<div className='swiper-pagination'></div>
					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</section> */}

			<section className='produtos'>
				<h3>TODOS OS PRODUTOS</h3>
				<div className='alignProdutos'>
					<ul className='produtos__container'>
						{/* 			<% for(let i=0; i<products.length; i++){ %>
						<li className="produto__container">
							<a
								href="/product/<%= products[i].id%>"
								className="link__produto"
							>
								<div className="produto__img">
									<img
										className="foto"
										src="/img/<%= products[i].image %>"
										alt="banner"
									/>
									<div className="icone">
										<a href="#"
											><img
												className="icone"
												src="/img/sacola.png"
												alt="banner"
										/></a>
									</div>
								</div>
								<div className="produto__conteudo">
									<p className="produto__nome">
										<%= products[i].name %>
									</p>
									<p className="produto__descricao">
										<%= products[i].type %>
									</p>
									<p className="produto__valor">
										R$ <%= products[i].price %>
									</p>
								</div>
							</a>
						</li>
					<% } %> */}
					</ul>
				</div>

				<Link className='produtos__botao' to='#'>
					VER TODOS OS PRODUTOS
				</Link>
			</section>
			<Footer />
		</>
	);
};

export default Home;
