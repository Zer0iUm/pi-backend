import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo goro 1.svg';
import login from '../../images/profile.svg';
import carrinho from '../../images/carrinho.svg';
import lupa from '../../images/lupa.svg';

import './style.css';

const Header = () => {
	const [keywords, setKeywords] = useState();

	useEffect(() => {}, []);

	return (
		<>
			<header className='cabecalho'>
				<div className='menu'>
					<Link className='menu__link' to='/homestore'>
						<img className='logo' alt='Logo Goró' src={logo} />
					</Link>
					<ul className='menu__lista'>
						<li className='menu__item'>
							<Link className='menu__linka' to='/cervejas' state={{product_type_id: "1"}}>
								CERVEJAS
							</Link>
						</li>
						<li className='menu__item'>
							<Link className='menu__linka' to='/listacessories' state={{product_type_id: "2"}}>
								ACESSÓRIOS
							</Link>
						</li>
						<li className='menu__item'>
							<Link className='menu__linka' to='/kits' state={{product_type_id: "3"}}>
								KITS
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className='menu__profile'>
						<li className='log'>
							<img className='login' alt='login' src={login} />
							<Link className='login' to='/login'>
								LOGIN
							</Link>
						</li>

						<li className='car'>
							<img
								className='carrinho'
								alt='carrinho'
								src={carrinho}
							/>
							<Link className='carrinho' to='/shoppingcart'>
								CARRINHO
							</Link>
						</li>
					</ul>
				</div>
			</header>

			<section className='pesquisa'>
				<form action='/search' method='GET' className='search-form'>
					<input
						name='keywords'
						className='pesquisa__input'
						type='text'
						placeholder='Buscar no site'
						value={keywords}
						onChange={e => setKeywords(e.target.value)}
					/>
					<button type='submit' className='search-form_button'>
						<img className='button-seach' alt='lupa' src={lupa} />
					</button>
				</form>
			</section>
		</>
	);
};

export default Header;
