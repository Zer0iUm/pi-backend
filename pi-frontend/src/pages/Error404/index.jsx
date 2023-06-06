import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const error404 = () => {
	return (
		<>
			<Header />
			<main>
				<div className='banner_completo'>
					<div className='conteudo'>
						<img src='/img/bannerLogo.svg' alt='banner' />
					</div>

					<div className='conteudo_banner'>
						<p className='conteudo01'>
							<strong>
								Não achamos o <br />
								que você procura!
							</strong>
						</p>

						<p className='conteudo02'>
							Suspende o álcool ...e tente reescrever a <br />
							palavra ou tente um outro termo parecido!
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default error404;
