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
		loadProduct();
	}, []);

	const loadProduct = () => {
		if (product !== null) {
			const productId = product.id;
			// Restante da lógica
		}
	};

	return (
		<>
			<Header />
			<section class='carrinho_compra'>
				<div class='header_carrinho'>
					<div class='titulo_carrinho'>
						<img
							class='carrinho2'
							alt='carrinho'
							src='http://localhost:3000/img/carrinho.svg'
						/>
						<h1 class='titulos'> CARRINHO DE COMPRAS</h1>
					</div>
					<button class='botao_preto' type='button'>
						<Link class='comprando' To='/homeStore'>
							CONTINUAR COMPRANDO
						</Link>
					</button>
				</div>
			</section>
			<div id='linha-horizontal1'></div>
			<section class='barra_carrinho'>
				<div>
					<h2 class='topo_carrinho1'>PRODUTO</h2>
				</div>
				<div>
					<h2 class='topo_carrinho'>
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
			{product.map(product => {
				<section class='frete'>
					<div class='titulo_frete'>
						<img
							class='caminhao'
							src='http://localhost:3000/img/frete.svg'
						/>
						<h3 class='CEP'>DIGITE O CEP DO ENDEREÇO DE ENTREGA</h3>
					</div>
					<div class='valor_frete'>
						<Input
							type='number'
							class='barra_cep'
							name='CEP'
							placeholder='ex: 00000-000'
						></Input>
						<span id='valor_frete'>R$ 00,00</span>
					</div>
				</section>;
			})}
			;
			<section class='fim_carrinho'>
				<div class='espaco_total'></div>
				<div class='soma_carrinho'>
					<div class='subtotal'>
						<div>
							<span class='subtil'>SUBTOTAL</span>
						</div>
						<span>R$ 00,00</span>
					</div>
					<span class='frete2'>
						<span class='subtil'>FRETE</span>
						<span id='frete_valor2'>R$ 00,00</span>
					</span>

					<div id='linha-horizontal2'></div>

					<div class='total_compra'>
						<span>TOTAL</span>
						<span>R$ 00,00</span>
					</div>
					<div class='alinhamento_botao'>
						<div></div>
						<div>
							<button class='botao_amarelo' type='button'>
								FINALIZAR COMPRA
							</button>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ShoppingCart;
