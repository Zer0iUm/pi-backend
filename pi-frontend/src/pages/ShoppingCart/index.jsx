import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import Input from '../../components/Input';
import './style.css';

const ShoppingCart = () => {
	const location = useLocation();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		/* loadProduct(); */
	}, []);

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

			<section className='barra_carrinho'>
				<div>
					<h2 className='topo_carrinho1'>PRODUTO</h2>
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
			</section>

			{product.map((product, index) => {
				return (
					<section className='frete' key={index}>
						<div className='titulo_frete'>
							<img
								className='caminhao'
								src='http://localhost:3000/img/frete.svg'
							/>
							<h3 className='CEP'>
								DIGITE O CEP DO ENDEREÇO DE ENTREGA
							</h3>
						</div>
						<div className='valor_frete'>
							<Input
								type='number'
								className='barra_cep'
								name='CEP'
								placeholder='ex: 00000-000'
							/>
							<span id='valor_frete'>R$ 00,00</span>
						</div>
					</section>
				);
			})}

			<section className='fim_carrinho'>
				<div className='espaco_total'></div>
				<div className='soma_carrinho'>
					<div className='subtotal'>
						<div>
							<span className='subtil'>SUBTOTAL</span>
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
						<div className='alinhamento_botao'>
							<div></div>
							<div>
								<button className='botao_amarelo' type='button'>
									FINALIZAR COMPRA
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ShoppingCart;
