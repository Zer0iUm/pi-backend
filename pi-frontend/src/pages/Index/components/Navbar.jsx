import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const navLinks = [
		{
			name: 'Início',
			link: '#',
		},
		{
			name: 'PORTFÓLIO',
			link: '#info--menu',
		},
		{
			image: '../../../images/logo.png',
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
					<ul className='nav-principal'>
						{navLinks.map(item => {
							if (item.image) {
								return (
									<li>
										<img
											alt={item.alt}
											src={item.image}
											className='logo'
										/>
									</li>
								);
							} else {
								return (
									<li>
										<Link
											className='nav--link'
											to={item.link}
										>
											{item.name}
										</Link>
									</li>
								);
							}
						})}
					</ul>
					<ul className='nav-icones'>
						{navSocials.map(item => {
							return (
								<li>
									<Link className='nav--link' to={item.link}>
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
