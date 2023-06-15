import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';
import api from '../../services/api';

const ShoppingCart = () => {
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
						<a class='comprando' href='/homeStore'>
							CONTINUAR COMPRANDO
						</a>
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

			{products.forEach(product => {
				<section class='compra'>
					<div class='produto'>
						<img
							class='foto_carrinho'
							src={`http://localhost:3000/img/${product.image}`}
							alt='foto cerveja'
						/>
						<div>
							<p class='nome_produto'>{product.name}</p>
							<p class='descritivo_produto'>{product.type}</p>
						</div>
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
										-
									</div>
									<input
										id='input-quantidade'
										type='text'
										value='0'
										min='0'
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
						<div class='valor_unitário'>R${product.price}</div>
						<div class='valor_total'>R$ 00,00</div>
					</div>
				</section>;
			})}

			<section class='frete'>
				<div class='titulo_frete'>
					<img
						class='caminhao'
						src='http://localhost:3000/img/frete.svg'
					/>
					<h3 class='CEP'>DIGITE O CEP DO ENDEREÇO DE ENTREGA</h3>
				</div>
				<div class='valor_frete'>
					<input
						type='number'
						class='barra_cep'
						name='CEP'
						placeholder='ex: 00000-000'
					/>
					<span id='valor_frete'>R$ 00,00</span>
				</div>
			</section>

			<section class='fim_carrinho'>
				<div class='espaco_total'></div>
				<div class='soma_carrinho'>
					<div class='subtotal'>
						<div>
							<span class='subtil'>
								SUBTOTAL
								<br class='produtosx' />
								(X produtos)
							</span>
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
