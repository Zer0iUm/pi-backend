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

			<div class='filtro_container-completo'>
				<div class='filtros'>
					<h2 class='filtro'>Filtros</h2>
					<hr class='linha-filtro' />
					<h3 class='Preco'>Preço</h3>

					<form action='index.html' method='get'>
						<input type='checkbox' name='Menor' value='Menor' />
						<label class='Menor' for='Menor'>
							Menor preço
						</label>
						<br />
						<input type='checkbox' name='Maior' value='Maior' />
						<label class='Maior' for='Maior'>
							Maior preço
						</label>
					</form>

					<h3 class='produto'>Produto</h3>
					<form action='index.html' method='get'>
						<input
							type='checkbox'
							name='Camiseta'
							value='Camiseta'
						/>
						<label class='Camiseta' for='Camiseta'>
							Camiseta
						</label>
						<br />
						<input type='checkbox' name='Térmico' value='Térmico' />
						<label class='Térmico' for='Térmico'>
							Térmico
						</label>
						<br />
						<input
							type='checkbox'
							name='Abridor de cerveja'
							value='Abridor de cerveja'
						/>
						<label
							class='AbridorDeCerveja'
							for='Abridor de cerveja'
						>
							Abridor de cerveja
						</label>
						<br />
						<input type='checkbox' name='balde' value='balde' />
						<label class='balde' for='balde'>
							balde
						</label>
					</form>

					<h3 class='estilo'>Estilo</h3>
					<form action='index.html' method='get'>
						<input
							type='checkbox'
							name='American Pale Ale'
							value='American Pale Ale'
						/>
						<label class='AmericanPaleAle' for='American Pale Ale'>
							American Pale Ale
						</label>
						<br />
						<input
							type='checkbox'
							name='Double IPA'
							value='Double IPA'
						/>
						<label class='DoubleIpa' for='Double IPA'>
							Double IPA
						</label>
						<br />
						<input
							type='checkbox'
							name='Brown ALE'
							value='Brown ALE'
						/>
						<label class='BrownAle' for='Brown ALE'>
							Brown ALE
						</label>
					</form>

					<h3 class='percentualAlcool'>% de álcool</h3>
					<form action='index.html' method='get'>
						<input type='checkbox' name='2,5%' value='2,5%' />
						<label class='doisEmeio' for='2,5%'>
							2,5%
						</label>
						<br />
						<input type='checkbox' name='6%' value='6%' />
						<label class='seis' for='6%'>
							6%
						</label>
						<br />
						<input type='checkbox' name='10%' value='10%' />
						<label class='dez' for='10%'>
							10%
						</label>
					</form>

					<h3 class='ibu'>IBU</h3>
					<form action='index.html' method='get'>
						<input type='checkbox' name='63' value='63' />
						<label class='sessentaEtres' for='63'>
							63
						</label>
						<br />
						<input type='checkbox' name='33' value='33' />
						<label class='trintaEtres' for='33'>
							33
						</label>
						<br />
						<input type='checkbox' name='80' value='80' />
						<label class='oitenta' for='80'>
							80
						</label>
					</form>

					<h3 class='embalagem'>Embalagem</h3>
					<form action='index.html' method='get'>
						<input type='checkbox' name='Vidro' value='Vidro' />
						<label class='Vidro' for='Vidro'>
							Vidro
						</label>
						<br />
						<input
							type='checkbox'
							name='Alumínio'
							value='Alumínio'
						/>
						<label class='Aluminio' for='Alumínio'>
							Alumínio
						</label>
						<br />
					</form>
				</div>

				<section class='container-produtos'>
					<h1 class='resultado-busca'>
						<span>RESULTADO DA BUSCA "PRODUTO DIGITADO"</span>
						<hr class='linha-produtos' />
					</h1>

					<div class='container-todosProdutos'>
						<ul class='produtos__container'>
							{products.forEach(product => {
								return (
									<li class='produto__container'>
										<a
											href='/product'
											class='link__produto'
										>
											<div class='produto__img'>
												<img
													class='foto'
													src='/img/<%= product.image %>'
													alt='banner'
												/>
												<div class='icone'>
													<a href='#'>
														<img
															class='icone'
															src='/img/sacola.png'
															alt='banner'
														/>
													</a>
												</div>
											</div>
											<div class='produto__conteudo'>
												<p class='produto__nome'>
													{product.name}
												</p>
												<p class='produto__descricao'>
													{product.type}
												</p>
												<p class='produto__valor'>
													R${product.price}
												</p>
											</div>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<a class='produtos__botao' href='#'>
						VER TODOS OS PRODUTOS
					</a>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default Search;
