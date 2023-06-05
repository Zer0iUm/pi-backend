import React, { useState }from "react"



const Header = () =>{

    const [keywords, setKeywords] = useState()

    return(
        <>
        <header className="cabecalho">
	<link rel="stylesheet" href="/css/header.css" />
	<div className="menu">
		<a className="menu__link" href="/homeStore">
			<img className="logo" alt="Logo Goró" src="/img/logo goro 1.svg" />
		</a>
		<ul className="menu__lista">
			<li className="menu__item">
				<a className="menu__linka" href="/cervejas">CERVEJAS</a>
			</li>
			<li className="menu__item">
				<a className="menu__linka" href="/listAcessories">ACESSÓRIOS</a>
			</li>
			<li className="menu__item">
				<a className="menu__linka" href="/Kits">KITS</a>
			</li>
		</ul>
	</div>
	<div>
		<ul className="menu__profile">
			<li className="log">
				<img className="login" alt="login" src="/img/profile.svg" />

				<a className="login" href="/accountUser"></a>

			</li>

			<li className="log">
				<img className="login" alt="login" src="/img/profile.svg" />
				<a className="login" href="/login">LOGIN</a>
			</li>

			<li className="car">
				<img className="carrinho" alt="carrinho" src="/img/carrinho.svg" />
				<a className="carrinho" href="/shoppingCart">CARRINHO</a>
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