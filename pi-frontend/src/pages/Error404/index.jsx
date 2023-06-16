import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './Error404.module.css';

const Error404 = () => {
	return (
		<>
			<Header />
			<main>
				<div className={styles.banner_completo}>
					<div className={styles.conteudo}>
						<img src='/img/bannerLogo.svg' alt='banner' />
					</div>

					<div className={styles.conteudo_banner}>
						<p className={styles.conteudo01}>
							<strong>
								Não achamos o <br />
								que você procura!
							</strong>
						</p>

						<p className={styles.conteudo02}>
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

export default Error404;
