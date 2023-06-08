import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/slide/Slide';
import banner from '../../images/banner goró 1.png';

import './style.css';
import api from '../../services/api';

const Home = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		loadProducts()
	}, [])

	const loadProducts = async () => {
		const response = await api.get('product')
		setProducts(response.data)

	}

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


 						{products.map((product) => ( 
						<li className="produto__container">
							<Link
								to={"/product"}
								className="link__produto"
								state={{ id: product.id }}
							>
								<div className="produto__img">
									<img
										className="foto"
										src={`http://localhost:3000/img/${product.image}`}
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
										 {product.name }
									</p>
									<p className="produto__descricao">
										{product.type }
									</p>
									<p className="produto__valor">
										R$  {product.price}
									</p>
								</div>
							</Link>
						</li>
						))}
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
