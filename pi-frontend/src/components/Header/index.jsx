import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo goro 1.svg';
import login from '../../images/profile.svg';
import carrinho from '../../images/carrinho.svg';
import lupa from '../../images/lupa.svg';

import styles from './Header.module.css';
import { getCookie } from '../../utils';

const Header = () => {
	const [keywords, setKeywords] = useState();
	const [username, setUsername] = useState('');

	useEffect(() => {}, []);

	return (
		<>
			<header className={styles.cabecalho}>
				<div className={styles.menu}>
					<Link className={styles.menu__link} to='/homestore'>
						<img
							className={styles.logo}
							alt='Logo Goró'
							src={logo}
						/>
					</Link>
					<ul className={styles.menu__lista}>
						<li className={styles.menu__item}>
							<Link
								className={styles.menu__linka}
								to='/cervejas'
								state={{ product_type_id: '1' }}
							>
								CERVEJAS
							</Link>
						</li>
						<li className={styles.menu__item}>
							<Link
								className={styles.menu__linka}
								to='/listacessories'
								state={{ product_type_id: '2' }}
							>
								ACESSÓRIOS
							</Link>
						</li>
						<li className={styles.menu__item}>
							<Link
								className={styles.menu__linka}
								to='/kits'
								state={{ product_type_id: '3' }}
							>
								KITS
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className={styles.menu__profile}>
						<li className={styles.log}>
							<img
								className={styles.login}
								alt='login'
								src={login}
							/>
							{getCookie('name') ? (
								getCookie('admin') === '0' ? (
									<Link
										className={styles.login}
										to='/accountuser'
									>
										{getCookie('name')}
									</Link>
								) : (
									<Link
										className={styles.login}
										to='/accountadmin'
									>
										{getCookie('name')}
									</Link>
								)
							) : (
								<Link className={styles.login} to='/login'>
									LOGIN
								</Link>
							)}
						</li>

						<li className={styles.car}>
							<img
								className={styles.carrinho}
								alt='carrinho'
								src={carrinho}
							/>
							<Link
								className={styles.carrinho}
								to='/shoppingcart'
							>
								CARRINHO
							</Link>
						</li>
					</ul>
				</div>
			</header>

			<section className={styles.pesquisa}>
				<form
					action='/search'
					method='GET'
					className={styles.search_form}
				>
					<input
						name='keywords'
						className={styles.pesquisa__input}
						type='text'
						placeholder='Buscar no site'
						value={keywords}
						onChange={e => setKeywords(e.target.value)}
					/>
					<button type='submit' className={styles.search_form_button}>
						<img
							className={styles.button_seach}
							alt='lupa'
							src={lupa}
						/>
					</button>
				</form>
			</section>
		</>
	);
};

export default Header;
