import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import { getCookie } from '../../utils';
import './style.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer/cartSlice';

const Product = () => {
	const [product, setProduct] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const [activeImage1, setActiveImage1] = useState(true);
	const [activeImage2, setActiveImage2] = useState(false);
	const [activeImage3, setActiveImage3] = useState(false);
	const [quantidade, setQuantidade] = useState(1);
	const [displayImage, setDisplayImage] = useState(
		`http://localhost:3000/img/${product.image}`
	);

	const [price, setPrice] = useState(product.price);
	const dispatch = useDispatch();
	const location = useLocation();
	
	const loadProduct = async () => {
		const response = await api.get(`product/${location.state.id}`);
		setProduct(response.data);
		const responseAll = await api.get('product');
		setAllProducts(responseAll.data);
	};
	
	const fixedPrice = product.price;

	const handleChange = thumbnail => {
		setDisplayImage(thumbnail);
	};
	
	const adicionarAoCarrinho = () => {
		dispatch(addToCart(product));
	}

	useEffect(() => {
		loadProduct();
	}, []);
	
	useEffect(() => {
		setDisplayImage(`http://localhost:3000/img/${product.image}`);
		setPrice(product.price);
	}, [product]);
	
	return (
		<>
			<Header />
			<div id='produto'>
				<section id='img-produto'>
					<div id='produto-mini'>
						<img
							alt='Pequeno 1'
							src={`http://localhost:3000/img/${product.image}`}
							style={
								activeImage1
									? { opacity: '.5' }
									: { opacity: '1' }
							}
							onClick={() => {
								handleChange(
									`http://localhost:3000/img/${product.image}`
								);
								{
									setActiveImage1(true);
									setActiveImage2(false);
									setActiveImage3(false);
								}
							}}
							id='img-mini-1'
						/>
						<img
							alt='Pequeno 2'
							src='http://localhost:3000/img/double.png'
							style={
								activeImage2
									? { opacity: '.5' }
									: { opacity: '1' }
							}
							onClick={() => {
								handleChange(
									'http://localhost:3000/img/double.png'
								);
								{
									setActiveImage1(false);
									setActiveImage2(true);
									setActiveImage3(false);
								}
							}}
							id='img-mini-2'
						/>
						<img
							alt='Pequeno 3'
							src='http://localhost:3000/img/american pale ale.png'
							style={
								activeImage3
									? { opacity: '.5' }
									: { opacity: '1' }
							}
							onClick={() => {
								handleChange(
									'http://localhost:3000/img/american pale ale.png'
								);
								{
									setActiveImage1(false);
									setActiveImage2(false);
									setActiveImage3(true);
								}
							}}
							id='img-mini-3'
						/>
					</div>
					<img
						alt='Imagem principal'
						src={displayImage}
						id='display'
					/>
				</section>
				<section id='info-produto'>
					<h1>{product.name}</h1>
					<h2>{product.type}</h2>
					<p>{product.description}</p>
					{product.type === '1' ? (
						<table id='info-tabela'>
							<tr>
								<th>% de álcool</th>
								<th>IBU</th>
								<th>Tipo de copo</th>
							</tr>
							<tr>
								<td>{product.abv}</td>
								<td>{product.ibu}</td>
								<td>{product.typeGlass}</td>
							</tr>
						</table>
					) : null}
					<hr />
					<div id='rating'>
						<img
							src='http://localhost:3000/img/star-active.png'
							alt='star 1'
							id='rating-1'
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 2'
							id='rating-2'
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 3'
							id='rating-3'
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 4'
							id='rating-4'
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 5'
							id='rating-5'
						/>
					</div>
					<h3 id='valorTotal'>R${Number(price).toFixed(2)}</h3>
					<section id='compra'>
						<div
							className='btn-quantidade'
							id='remover'
							onClick={() => {
								setQuantidade(prevQuantidade => {
									if (quantidade <= 1) setQuantidade(1);
									else {
										const updatedQuantidade =
											prevQuantidade - 1;
										setPrice(
											fixedPrice * updatedQuantidade
										);
										return updatedQuantidade;
									}
								});
							}}
						>
							-
						</div>
						<input
							id='input-quantidade'
							type='text'
							value={quantidade}
						/>
						<div
							className='btn-quantidade'
							id='adicionar'
							onClick={() => {
								setQuantidade(prevQuantidade => {
									const updatedQuantidade =
										prevQuantidade + 1;
									setPrice(fixedPrice * updatedQuantidade);
									return updatedQuantidade;
								});
							}}
						>
							+
						</div>
						<button
							onClick={adicionarAoCarrinho}
						>
							COMPRAR
						</button>
					</section>
					<>
					{getCookie('admin') === '1' ? (
						<>
							<Link
							state={{ id: product.id }}
							to={`/productupdate`}
							className='action-button edit'
							>
							Editar Produto
							</Link>
							<form
							action={`http://localhost:3000/img/product/${product.id}?_method=DELETE`}
							method='POST'
							>
							<button
								type='submit'
								className='action-button delete'
							>
								Remover Produto
							</button>
							</form>
						</>
						) : null}
					</>
				</section>
			</div>

			<section id='comentarios'>
				<h2 className='subtitulo'>COMENTÁRIOS</h2>
				<hr className='divisao' />
				<section className='comentario'>
					<h3>Nome Sobrenome</h3>
					<div className='rating-user'>
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec laoreet fermentum mollis. In nisi tellus,
						tristique eget nisl at, tristique posuere turpis.
						Quisque eleifend velit quis vestibulum sodales. Donec
						porta metus non malesuada aliquet.
					</p>
					<div className='rating-comentario'>
						<img
							alt='thumbs up'
							src='http://localhost:3000/img/like-active.png'
						/>
						<div className='likes'>1</div>
						<img
							alt='thumbs down'
							src='http://localhost:3000/img/dislike.png'
						/>
						<div className='dislikes'></div>
					</div>
					<h3>Nome Sobrenome</h3>
					<div className='rating-user'>
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<div className='rating-comentario'>
						<img
							alt='thumbs up'
							src='http://localhost:3000/img/like.png'
						/>
						<div className='likes'></div>
						<img
							alt='thumbs down'
							src='http://localhost:3000/img/dislike-active.png'
						/>
						<div className='dislikes'>1</div>
					</div>
					<h3>Nome Sobrenome</h3>
					<div className='rating-user'>
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
						<img src='http://localhost:3000/img/star.png' />
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
					<div className='rating-comentario'>
						<img
							alt='thumbs up'
							src='http://localhost:3000/img/like.png'
						/>
						<div className='likes'></div>
						<img
							alt='thumbs down'
							src='http://localhost:3000/img/dislike.png'
						/>
						<div className='dislikes'></div>
					</div>
				</section>
			</section>

			<section id='recomendacao'>
				<h2 className='subtitulo'>QUEM VIU ESSE PRODUTO TAMBÉM VIU</h2>
				<hr className='divisao' />
				<ul className='produtos__container'>
					{Array.from({ length: 4 }, (item, index) => {
						const iRandom = Math.floor(
							Math.random() * allProducts.length
						);
						return (
							<li className='produto__container'>
								<Link
									to={`http://localhost:3000/product/${product.id}`}
									className='link__produto'
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
											{product.description}
										</p>
										<p className='produto__valor'>
											{product.price}
										</p>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</>
	);
};

export default Product;
