import React from 'react';

import './style.css';

const Footer = () => {
	return (
		<>
			<footer>
				<hr className='amarelo' />
				<hr className='vermelho' />
				<hr className='preto' />
				<div className='footer__container'>
					<div className='footer__logo'>
						<img
							className='logo'
							alt='Logo Goró'
							src='/img/logo goro 1.svg'
						/>
					</div>

					<div className='footer__inst'>
						<ul>
							<h5>INSTITUCIONAL</h5>
							<li>
								<a href='/'> Home </a>
							</li>
							<li>
								<a href='/#info--menu'> Portfólio </a>
							</li>
							<li>
								<a href='#'> Contato </a>
							</li>
							<li>
								<a href='/#about'> Sobre nós </a>
							</li>
							<li>
								<a href='/homeStore'> Loja </a>
							</li>
						</ul>
					</div>

					<div className='footer__legal'>
						<ul>
							<h5>LEGAL</h5>
							<li>
								<a href='#'> Termos de uso </a>
							</li>
							<li>
								<a href='#'> Política de privacidade </a>
							</li>
						</ul>

						<div className='footer__redes'>
							<h5>REDES SOCIAIS</h5>
							<ul className='footer__lista'>
								<li className='footer__item'>
									<a className='footer__link' href='#'>
										<img
											className='redes__logo'
											alt='Instagram'
											src='/img/Instagram - Negative.svg'
										/>
									</a>
								</li>
								<li className='footer__item'>
									<a className='footer__link' href='#'>
										<img
											className='redes__logo'
											alt='YouTube'
											src='/img/YouTube - Negative.svg'
										/>
									</a>
								</li>
								<li className='footer__item'>
									<a className='footer__link' href='#'>
										<img
											className='redes__logo'
											alt='Facebook'
											src='/img/Facebook - Negative.svg'
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='footer__email'>
						<p>
							Inscreva-se na nossa Newsletter e receba as nossas
							novidades em primeira mão.
						</p>
						<div className='email__input'>
							<input
								id='email'
								type='email'
								placeholder='SEU E-MAIL'
							/>
							<button>INSCREVER-SE</button>
						</div>
					</div>
				</div>

				<p id='CNPJ'>
					© 2022 CERVEJARIA GORÓ LTDA. 00.000.000/0001-00 | Rua dos
					Bobos, 0 - Cidade, ES
				</p>
			</footer>
		</>
	);
};
export default Footer;
