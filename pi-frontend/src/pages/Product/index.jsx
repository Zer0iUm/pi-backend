import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Comments from './components/Comments';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import { getCookie } from '../../utils';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../reducer/cartSlice';

import styles from './Product.module.css';

const Product = () => {
	// const [id, setId] = useState(1);
	// const [user_id, setUser_id] = useState('1');
	// const [total, setTotal] = useState(0);
	// const [status, setStatus] = useState(true);
	// const [shipment_price, setShipment_price] = useState(0);

	// const handleSave = async e => {
	// 	const formData = new FormData();
	// 	formData.append('id', id);
	// 	formData.append('user_id', getCookie('id'));
	// 	formData.append('total', price);
	// 	formData.append('status', status);
	// 	formData.append('shipment_price', shipment_price);
	// 	formData.append('product_id', product.id);

	// 	try {
	// 		await api.post('/cart', formData, {
	// 			Headers: { authentication: getCookie('authentication') },
	// 		});

	// 		alert('Produto adicionado ao carrinho!');
	// 		// navigate('/homestore');
	// 	} catch (error) {
	// 		alert(error.response.data.error);
	// 	}
	// 	console.log('FIM DA ADD CART');
	// 	console.log('form', formData);
	// };

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
	const navigate = useNavigate();

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

	const handleDelete = async () => {
		await api
			.delete(`/product/${location.state.id}`)
			.then(navigate('/homestore'));
	};

	const adicionarAoCarrinho = async () => {
		// await api.get('/cart');
		if (getCookie('name')) {
			dispatch(addToCart({ ...product, quantidade: quantidade }));
			alert('Produto adicionado ao carrinho');
		} else navigate('/login');
	};

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
			<div id={styles.produto}>
				<section id={styles.img_produto}>
					<div id={styles.produto_mini}>
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
								setActiveImage1(true);
								setActiveImage2(false);
								setActiveImage3(false);
							}}
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
								setActiveImage1(false);
								setActiveImage2(true);
								setActiveImage3(false);
							}}
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
								setActiveImage1(false);
								setActiveImage2(false);
								setActiveImage3(true);
							}}
						/>
					</div>
					<img
						alt='Imagem principal'
						src={displayImage}
						id={styles.display}
					/>
				</section>

				<section id={styles.info_produto}>
					<h1>{product.name}</h1>
					<h2>{product.type}</h2>
					<p>{product.description}</p>
					{product.user_id === 1 ? (
						<table id={styles.info_tabela}>
							<tr>
								<th>% de álcool</th>
								<th>IBU</th>
								<th>Tipo de copo</th>
							</tr>
							<tr>
								<td>{product.abv}%</td>
								<td>{product.ibu}</td>
								<td>{product.type_glass}</td>
							</tr>
						</table>
					) : null}
					<hr />
					<div id={styles.rating}>
						<img
							src='http://localhost:3000/img/star-active.png'
							alt='star 1'
							id={styles.rating_1}
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 2'
							id={styles.rating_2}
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 3'
							id={styles.rating_3}
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 4'
							id={styles.rating_4}
						/>
						<img
							src='http://localhost:3000/img/star.png'
							alt='star 5'
							id={styles.rating_5}
						/>
					</div>
					<h3 id={styles.valorTotal}>R${Number(price).toFixed(2)}</h3>
					<section id={styles.compra}>
						<div
							className={styles.btn_quantidade}
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
							id={styles.input_quantidade}
							type='text'
							value={quantidade}
						/>
						<div
							className={styles.btn_quantidade}
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
							// onClick={handleSave}
							onClick={adicionarAoCarrinho}
							state={{ id: getCookie('id') }}
						>
							ADICIONAR AO CARRINHO
						</button>
					</section>
					<>
						{getCookie('admin') === '1' ? (
							<div className={styles.admin}>
								<Link
									state={{ id: product.id }}
									to={`/productupdate`}
									className='action-button edit admin'
								>
									<button className={styles.editar}>
										Editar Produto
									</button>
								</Link>

								<button
									onClick={handleDelete}
									type='submit'
									// className='action_button delete'
								>
									Remover Produto
								</button>
							</div>
						) : null}
					</>
				</section>
			</div>

			<section id={styles.comentarios}>
				<h2 className={styles.subtitulo}>COMENTÁRIOS</h2>
				<hr className={styles.divisao} />
				<Comments />
				<Comments />
				<Comments />
			</section>

			<section id={styles.recomendacao}>
				<h2 className={styles.subtitulo}>
					QUEM VIU ESSE PRODUTO TAMBÉM VIU
				</h2>
				<hr className={styles.divisao} />
				<ul className='produtos__container'>
					{Array.from({ length: 4 }, (item, index) => {
						{
							/* const iRandom = Math.floor(
							Math.random() * allProducts.length
						); */
						}
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
										{/* <p className='produto__descricao'>
											{product.description}
										</p> */}
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
			<Footer />
		</>
	);
};

export default Product;
