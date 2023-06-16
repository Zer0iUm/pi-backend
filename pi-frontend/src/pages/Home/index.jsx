import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Slide from '../../components/slide/Slide';
import banner from '../../images/banner goró 1.png';

import './style.css';
import api from '../../services/api';
import DemoCarousel from './components/carousel';

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
				<section class="categoria">
				<h3>CATEGORIAS</h3>
				<div class="categoria__container">
					<Link to="/cervejas" class="categoria__amarelo" state={{product_type_id: "1"}}>
						<img src="http://localhost:3000/img/Group 4.svg" />
						<h4>CERVEJA</h4>
					</Link>
					<Link to="/listacessories" class="categoria__preto" state={{product_type_id: "2"}}>
						<img src="http://localhost:3000/img/Vector.svg" />
						<h4>ACESSÓRIOS</h4>
					</Link>
					<Link to="/kits" class="categoria__vermelho" state={{product_type_id: "3"}}>
						<img src="http://localhost:3000/img/Vector_.svg" />
						<h4>KITS</h4>
					</Link>
				</div>
			</section>
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
