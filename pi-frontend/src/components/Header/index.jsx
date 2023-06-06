import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./style.css";

const Header = () =>{

    const [keywords, setKeywords] = useState()

	useEffect(() => {
}, [])

    return(
        <>
        <header className="cabecalho">
	<link rel="stylesheet" href="/css/header.css" />
	<div className="menu">
		<Link className="menu__link" href="/homeStore">
			<img className="logo" alt="Logo Goró" src="../image/logo goro 1.svg" />
		</Link>
		<ul className="menu__lista">
			<li className="menu__item">
				<Link className="menu__linka" to="/cervejas">CERVEJAS</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__linka" to="/listAcessories">ACESSÓRIOS</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__linka" to="/Kits">KITS</Link>
			</li>
		</ul>
	</div>
	<div>
		<ul className="menu__profile">
			<li className="log">
				<img className="login" alt="login" src="/img/profile.svg" />

				<Link className="login" to="/accountUser"></Link>

			</li>

			<li className="log">
				<img className="login" alt="login" src="/img/profile.svg" />
				<Link className="login" to="/login">LOGIN</Link>
			</li>

			<li className="car">
				<img className="carrinho" alt="carrinho" src="/img/carrinho.svg" />
				<Link className="carrinho" to="/shoppingCart">CARRINHO</Link>
			</li>
		</ul>
	</div>
</header>

<section className="pesquisa">
	<form action="/search" method="GET" className="seach-form">
		
		<input
			name="keywords"
			className="pesquisa__input"
			type="text"
			placeholder="Buscar no site"
            value={keywords}
            onChange={e => setKeywords(e.target.value)}
		/>
		<button type="submit" className="search-form_button">
			<img className="button-seach" alt="lupa" src="/img/lupa.svg" />
		</button>
		</form>
</section>
</>
    )
}


export default Header