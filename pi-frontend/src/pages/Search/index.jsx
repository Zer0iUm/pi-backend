import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';

import './style.css';

const Search = () => {
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

			<div className='filtro_container-completo'>
				<div className='filtros'>
					<h2 className='filtro'>Filtros</h2>
					<hr className='linha-filtro' />
					<h3 className='Preco'>Preço</h3>

					<form action='index.html' method='get'>
						<input type='checkbox' name='Menor' value='Menor' />
						<label className='Menor' for='Menor'>
							Menor preço
						</label>
						<br />
						<input type='checkbox' name='Maior' value='Maior' />
						<label className='Maior' for='Maior'>
							Maior preço
						</label>
					</form>

					<h3 className='produto'>Produto</h3>
					<form action='index.html' method='get'>
						<input
							type='checkbox'
							name='Camiseta'
							value='Camiseta'
						/>
						<label className='Camiseta' for='Camiseta'>
							Camiseta
						</label>
						<br />
						<input type='checkbox' name='Térmico' value='Térmico' />
						<label className='Térmico' for='Térmico'>
							Térmico
						</label>
						<br />
						<input
							type='checkbox'
							name='Abridor de cerveja'
							value='Abridor de cerveja'
						/>
						<label
							className='AbridorDeCerveja'
							for='Abridor de cerveja'
						>
							Abridor de cerveja
						</label>
						<br />
						<input type='checkbox' name='balde' value='balde' />
						<label className='balde' for='balde'>
							balde
						</label>
					</form>

					<h3 className='estilo'>Estilo</h3>
					<form action='index.html' method='get'>
						<input
							type='checkbox'
							name='American Pale Ale'
							value='American Pale Ale'
						/>
						<label
							className='AmericanPaleAle'
							for='American Pale Ale'
						>
							American Pale Ale
						</label>
						<br />
						<input
							type='checkbox'
							name='Double IPA'
							value='Double IPA'
						/>
						<label className='DoubleIpa' for='Double IPA'>
							Double IPA
						</label>
						<br />
						<input
							type='checkbox'
							name='Brown ALE'
							value='Brown ALE'
						/>
						<label className='BrownAle' for='Brown ALE'>
							Brown ALE
						</label>
					</form>

					<h3 className='percentualAlcool'>% de álcool</h3>
					<form action='index.html' method='get'>
						<input type='checkbox' name='2,5%' value='2,5%' />
						<label className='doisEmeio' for='2,5%'>
							2,5%
						</label>
						<br />
						<input type='checkbox' name='6%' value='6%' />
						<label className='seis' for='6%'>
							6%
						</label>
						<br />
						<input type='checkbox' name='10%' value='10%' />
						<label className='dez' for='10%'>
							10%
						</label>
					</form>

					<h3 className='ibu'>IBU</h3>
					<form action='index.html' method='get'>
						<input type='checkbox' name='63' value='63' />
						<label className='sessentaEtres' for='63'>
							63
						</label>
						<br />
						<input type='checkbox' name='33' value='33' />
						<label className='trintaEtres' for='33'>
							33
						</label>
						<br />
						<input type='checkbox' name='80' value='80' />
						<label className='oitenta' for='80'>
							80
						</label>
					</form>

					<h3 className='embalagem'>Embalagem</h3>
					<form action='index.html' method='get'>
						<input type='checkbox' name='Vidro' value='Vidro' />
						<label className='Vidro' for='Vidro'>
							Vidro
						</label>
						<br />
						<input
							type='checkbox'
							name='Alumínio'
							value='Alumínio'
						/>
						<label className='Aluminio' for='Alumínio'>
							Alumínio
						</label>
						<br />
					</form>
				</div>

				<section className='container-produtos'>
					<h1 className='resultado-busca'>
						<span>RESULTADO DA BUSCA "PRODUTO DIGITADO"</span>
						<hr className='linha-produtos' />
					</h1>

					<div className='container-todosProdutos'>
						<ul className='produtos__container'>
							{products.forEach(product => {
								return (
									<li className='produto__container'>
										<a
											href='/product'
											className='link__produto'
										>
											<div className='produto__img'>
												<img
													className='foto'
													src='/img/<%= product.image %>'
													alt='banner'
												/>
												<div className='icone'>
													<a href='#'>
														<img
															className='icone'
															src='/img/sacola.png'
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
													R${product.price}
												</p>
											</div>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<a className='produtos__botao' href='#'>
						VER TODOS OS PRODUTOS
					</a>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default Search;
