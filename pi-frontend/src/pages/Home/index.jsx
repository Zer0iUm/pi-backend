import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import DemoCarousel from './components/carousel';
import './style.css';

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const response = await api.get('product');
		setProducts(response.data);
	};
	return (
		<>
			<Header />
			<DemoCarousel />
			{/* 	<Slide banner={banner} type='Acessórios' title='Goro Style' /> */}
			<section className='produtos'>
				<h3>TODOS OS PRODUTOS</h3>
				<div className='alignProdutos'>
					<ul className='produtos__container'>
						{products.map(product => (
							<li className='produto__container'>
								<Link
									to={'/product'}
									className='link__produto'
									state={{ id: product.id }}
								>
									<div className='produto__img'>
										<img
											className='foto'
											src={`http://localhost:3000/img/${product.image}`}
											alt='banner'
										/>
										<div className='icone'>
											<a href='#'>
												<img
													className='icone'
													src='http://localhost:3000/img/sacola.png'
													alt='banner'
												/>
											</a>
										</div>
									</div>
									<div className='produto__conteudo'>
										<p className='produto__nome'>
											{product.name}
										</p>
										<p className='produto__descricao'>
											{product.type}
										</p>
										<p className='produto__valor'>
											R$ {product.price}
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
