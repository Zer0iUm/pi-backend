import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import Input from '../../components/Input';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../reducer/cartSlice';
import { getCookie } from '../../utils';

const ShoppingCart = () => {
	const location = useLocation();
	const [total, setTotal] = useState([]);
	const [productsCart, setProductsCart] = useState([]);

	let carrinho = useSelector(state => state.cart);

	const dispatch = useDispatch();

	const handleRemove = id => {
		dispatch(removeFromCart(id));
	};

	const totalCart = () => {
		let valorItem = 0;
		let soma = 0;
		if (productsCart.length) {
			productsCart.map(item => {
				valorItem = item.price * item.quantidade;
				soma += valorItem;
				setTotal(soma);
			});
		}
	};

	useEffect(() => {
		console.log(productsCart);
	}, [productsCart]);

	useEffect(() => {
		setProductsCart(carrinho);
	}, [carrinho]);

	useEffect(() => {
		totalCart();
	}, [productsCart]);

	useEffect(() => {
		console.log('cart', total);
	}, [total]);

	const user_id = getCookie('id');
	const addToCart = async () => {
		console.log('dentro do add to cart');
		try {
			const response = await api.post('/cart', productsCart, user_id);
			console.log('Products added to cart:', response.data);
			// Optionally, you can handle a successful response here, such as displaying a success message to the user.
		} catch (error) {
			console.error('Error adding products to cart:', error);
			// Optionally, you can handle an error response here, such as displaying an error message to the user.
		}
	};

	return (
		<>
			<Header />

			<section className='carrinho_compra'>
				<div className='header_carrinho'>
					<div className='titulo_carrinho'>
						<img
							className='carrinho2'
							alt='carrinho'
							src='http://localhost:3000/img/carrinho.svg'
						/>
						<h1 className='titulos'> CARRINHO DE COMPRAS</h1>
					</div>
					<button className='botao_preto' type='button'>
						<Link className='comprando' to='/homeStore'>
							CONTINUAR COMPRANDO
						</Link>
					</button>
				</div>
			</section>

			<div id='linha-horizontal1'></div>

			{productsCart.length > 0 && (
				<>
					<section className='barra_carrinho'>
						<div>
							<h2>PRODUTO</h2>
						</div>

						<div>
							<h2>QUANTIDADE</h2>
						</div>

						<div>
							<h2>VALOR UNITÁRIO</h2>
						</div>

						<div>
							<h2>VALOR TOTAL</h2>
						</div>
					</section>

					{productsCart?.map(product => (
						<>
							<div className='produto'>
								<img
									class='foto_carrinho'
									src={`http://localhost:3000/img/${product.image}`}
								/>
								<div className='registro_produto'>
									<p className='nome_produto'>
										{' '}
										{product.name}
									</p>
									<p className='price_product'>
										{product.price}
									</p>
								</div>
								<div class='carrinho_direita'>
									<div class='container'>
										<div class='row'>
											<section id='mais_menos'>
												<div
													class='btn-quantidade'
													id='remover'
													onclick="setQuantidade('remove')"
												>
													<button
														className='btn_remover'
														onClick={() =>
															handleRemove(
																product.id
															)
														}
													>
														Remover
													</button>
													-
												</div>
												<input
													id='input-quantidade'
													type='text'
													value={product.quantidade}
													min='1'
												/>
												<div
													class='btn-quantidade'
													id='adicionar'
													onclick="setQuantidade('add')"
												>
													+
												</div>
											</section>
										</div>
									</div>
									<div class='valor_unitário'>
										R$ {product.price}
									</div>
									<div class='valor_total'>
										R${' '}
										{(
											product.price * product.quantidade
										).toFixed(2)}
									</div>
								</div>
							</div>
						</>
					))}

					<section className='fim_carrinho'>
						<div className='espaco_total'></div>
						<div className='soma_carrinho'>
							<div className='subtotal'>
								<div>
									<span className='subtil'>
										R$ {total > 0 && total.toFixed(2)}
									</span>
								</div>
								<div>
									<h2 className='topo_carrinho'>
										<li>
											<h2>QUANTIDADE</h2>
										</li>
										<li>
											<h2>VALOR UNITÁRIO</h2>
										</li>
										<li>
											<h2>VALOR TOTAL</h2>
										</li>
									</h2>
								</div>
								<span className='frete2'>
									<span className='subtil'>FRETE</span>
									<span id='frete_valor2'>R$ 00,00</span>
								</span>
								<div id='linha-horizontal2'></div>
								<div className='total_compra'>
									<span>TOTAL</span>
									<span>R$ 00,00</span>
								</div>
								{/* <div className='alinhamento_botao'> */}
								<div>
									<button
										className='botao_amarelo'
										type='button'
										onClick={addToCart}
									>
										FINALIZAR COMPRA
									</button>
								</div>
								{/* </div> */}
							</div>
						</div>
					</section>
				</>
			)}

			{productsCart.length == 0 && (
				<section className='carrinho_compra'>
					<p>Você ainda não adicionou produtos no seu carrinho.</p>
				</section>
			)}

			<Footer />
		</>
	);
};

export default ShoppingCart;
