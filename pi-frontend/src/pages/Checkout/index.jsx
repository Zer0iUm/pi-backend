import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Checkout.module.css';

const checkout = () => {
	return (
		<>
			<Header />
			<main>
				<div className={styles.pagamento}>
					<img
						className={styles.img_carteira}
						src='http://localhost:3000/img/carteira.svg'
						alt='carteira--pagamento'
					/>
					<p>PAGAMENTO</p>
				</div>

				<hr className={styles.linha_pagamento} />

				<div className={styles.corpo}>
					<div>
						<div className={styles.titulo_endereco}>
							<p>ENDEREÇO DA ENTREGA</p>
						</div>

						<div>
							<div className={styles.dados_cliente}>
								<p className={styles.nome_cpf}>
									Paula Silva <br />
									000.000.000-00
								</p>
								<br />
								<p className={styles.endereco}>
									Rua dos Bobos, Nº 000 <br /> Bairro Travessa
									1 <br />
									Cidade-ES <br />
									CEP 00000-000
								</p>
								<button className={styles.dados_cadastrais}>
									EDITAR DADOS CADASTRAIS
								</button>
							</div>
						</div>
					</div>

					<div>
						<div className={styles.metodo_pagamento}>
							<p>MÉTODO DE PAGAMENTO</p>
						</div>

						<div className={styles.forma_pagamento}>
							<div className={styles.titulo_metodo_pagamento}>
								<img
									src='http://localhost:3000/img/cartao.svg'
									alt='imagem cartão'
								/>
								<h2 className={styles.titulo_cartao}>
									Cartão de crédito
								</h2>
							</div>

							<hr className={styles.linha_metodo} />

							<form
								id='form'
								className={styles.formulario}
								action='/'
								method='get'
							>
								<div className={styles.div_form}>
									<label for='nome--cartao'>
										Nome do cartão
									</label>
									<input
										type='text'
										id='nome--cartao'
										name='nome--completo'
										placeholder='ex: Paula Silva'
									/>
								</div>

								<div className={styles.div_form}>
									<label for='numero--cartao'>
										Numero do cartão de crédito
									</label>
									<input
										type='text'
										id='numero--cartao'
										name='numero--cartao--completo'
										placeholder='0000 000000 00000'
									/>
								</div>

								<div className={styles.div_form}>
									<label for='validade--cartao'>
										Validade do cartão
									</label>
									<input
										type='text'
										id='validade--cartao'
										name='validade--card'
										placeholder='00/00'
									/>
								</div>

								<div className={styles.div_form}>
									<label for='cod--cartao'>
										Código de segurança
									</label>
									<input
										type='text'
										id='cod--cartao'
										name='cod--seguranca'
										placeholder='CVV'
									/>
								</div>

								<div className={styles.botao}>
									<button
										type='submit'
										className={styles.confirmar_cartao}
									>
										CONFIRMAR CARTÃO
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div>
					<div className={styles.titulo_compra}>
						<p>VALOR FINAL DA COMPRA</p>
					</div>

					<div className={styles.valor_final}>
						<div className={styles.subtotal}>
							<p>
								<strong>SUBTOTAL</strong> <br /> (X produtos)
							</p>
							<p>R$ 00,00</p>
						</div>
						<br />
						<div className={styles.frete}>
							<p>
								<strong>FRETE</strong>
							</p>
							<p>R$ 00,00</p>
						</div>
						<hr className={styles.linha_compra} />

						<div className={styles.total}>
							<p>
								<strong>TOTAL</strong>
							</p>
							<p>R$ 00,00</p>
						</div>
						<div className={styles.botao_compra}>
							<button className={styles.confirmar_compra}>
								CONFIRMAR A COMPRA
							</button>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default checkout;
