import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

import styles from '../marca.module.css';

export default function Navbar() {
	const navLinks = [
		{
			name: 'INÍCIO',
			link: '#',
		},
		{
			name: 'PORTFÓLIO',
			link: '#info_menu',
		},
		{
			image: { logo },
			alt: 'Logo goró',
		},
		{
			name: 'SOBRE NÓS',
			link: '#about',
		},
		{
			name: 'LOJA',
			link: '/homestore',
		},
	];
	const navSocials = [
		{
			name: 'fa-brands fa-instagram',
			link: '#',
		},
		{
			name: 'fa-brands fa-youtube',
			link: '#',
		},
		{
			name: 'fa-brands fa-facebook',
			link: '#',
		},
	];
	return (
		<>
			<header>
				<nav>
					<ul className={styles.nav_principal}>
						{navLinks.map(item => {
							if (item.image) {
								return (
									<li>
										<img
											alt={item.alt}
											src={logo}
											className={styles.logo}
										/>
									</li>
								);
							} else {
								return (
									<li>
										<Link
											className={styles.nav_link}
											to={item.link}
										>
											{item.name}
										</Link>
									</li>
								);
							}
						})}
					</ul>
					<ul className={styles.nav_icones}>
						{navSocials.map(item => {
							return (
								<li>
									<Link
										className={styles.nav_link}
										to={item.link}
									>
										<i className={item.name}></i>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
		</>
	);
}
