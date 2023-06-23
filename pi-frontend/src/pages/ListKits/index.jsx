import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import Filtro from './components/filter';

const ListKits = () => {
	const [products, setProducts] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const handleFilterChange = filteredData => {
		setFilteredData(filteredData);
	};

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const response = await api.get(`/kits`);
		console.log(response.data);
		setProducts(response.data);
	};

	return (
		<>
			<Header />
			<main>
				<div className='banner'>
					<img
						src='http://localhost:3000/img/banner menor kit 1.png'
						alt='banner'
					/>
				</div>
				<div className='filtro--cerveja--completo'>
					<Filtro onFilterChange={handleFilterChange} />
					<section className='container--kits'>
						<h1 className='kits'>
							<span>KITS</span>
						</h1>
						<hr className='linha--kits' />

						<ul className='produtos__container'>
							{filteredData.length > 0
								? filteredData.map(product => (
										<li className='produto__container'>
											<Link
												to='/product'
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
														<Link to='#'>
															<img
																className='icone'
																src='http://localhost:3000/img/sacola.png'
																alt='banner'
															/>
														</Link>
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
														R${product.price}
													</p>
												</div>
											</Link>
										</li>
								  ))
								: products.map(product => (
										<li className='produto__container'>
											<Link
												to='/product'
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
						<Link
							to='#'
							className='produtos__botao'
							style={{
								display: 'block',
								width: 'fit-content',
								margin: '0 auto',
								marginBottom: '60px',
								padding: '15px 30px',
								textAlign: 'center',
							}}
						>
							VER TODOS OS PRODUTOS
						</Link>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default ListKits;
