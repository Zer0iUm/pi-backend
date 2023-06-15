import React from 'react';
import { Link } from 'react-router-dom'

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
							src='http://localhost:3000/img/logo goro 1.svg'
						/>
					</div>

					<div className='footer__inst'>
						<ul>
							<h5>INSTITUCIONAL</h5>
							<li>
								<Link to='/'> Home </Link>
							</li>
							<li>
								<Link to='/#info--menu'> Portfólio </Link>
							</li>
							<li>
								<Link to='#'> Contato </Link>
							</li>
							<li>
								<Link to='/#about'> Sobre nós </Link>
							</li>
							<li>
								<Link to='/homeStore'> Loja </Link>
							</li>
						</ul>
					</div>

					<div className='footer__legal'>
						<ul>
							<h5>LEGAL</h5>
							<li>
								<Link to='#'> Termos de uso </Link>
							</li>
							<li>
								<Link to='#'> Política de privacidade </Link>
							</li>
						</ul>

						<div className='footer__redes'>
							<h5>REDES SOCIAIS</h5>
							<ul className='footer__lista'>
								<li className='footer__item'>
									<Link className='footer__link' to='#'>
										<img
											className='redes__logo'
											alt='Instagram'
											src='http://localhost:3000/img/Instagram - Negative.svg'
										/>
									</Link>
								</li>
								<li className='footer__item'>
									<Link className='footer__link' to='#'>
										<img
											className='redes__logo'
											alt='YouTube'
											src='http://localhost:3000/img/YouTube - Negative.svg'
										/>
									</Link>
								</li>
								<li className='footer__item'>
									<Link className='footer__link' to='#'>
										<img
											className='redes__logo'
											alt='Facebook'
											src='http://localhost:3000/img/Facebook - Negative.svg'
										/>
									</Link>
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
