import React from 'react';

import '../style.css';

export default function Category() {
	return (
		<section className='categoria'>
			<h3>CATEGORIAS</h3>
			<div className='categoria__container'>
				<Link to='/cervejas' className='categoria__amarelo'>
					<img src='/img/Group 4.svg' />
					<h4>CERVEJA</h4>
				</Link>
				<Link to='/listacessories' className='categoria__preto' state={{product_type_id: "2"}}>
					<img src='/img/Vector.svg' />
					<h4>ACESSÓRIOS</h4>
				</Link>
				<Link to='/Kits' className='categoria__vermelho'>
					<img src='/img/Vector_.svg' />
					<h4>KITS</h4>
				</Link>
			</div>
		</section>
	);
}
