import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Filtro from './components/FIltro/filter';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

const ListAcessories = () => {
	const [products, setProducts] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const handleFilterChange = filteredData => {
		setFilteredData(filteredData);
	};

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const response = await api.get(`/listAcessories`);
		console.log(response.data);
		setProducts(response.data);
	};

	return (
		<>
			<Header />
			<div className='banner'>
				<img
					src='http://localhost:3000/img/banner menor cerveja 1.png'
					alt='banner'
				/>
			</div>

			<div style={{ display: 'flex' }}>
				<Filtro onFilterChange={handleFilterChange} />

				<section className='container--cervejas'>
					<h1 className='acessorios'>
						<span>ACESSÓRIOS</span>
					</h1>
					<hr className='linha--cerveja' />

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
						href='#'
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
			<Footer />
		</>
	);
};

export default ListAcessories;
