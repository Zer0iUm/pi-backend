import React, { useState } from 'react';
import paleAle from '../../../images/american pale ale.png';
import doubleIpa from '../../../images/double.png';
import brownIpa from '../../../images/brown.png';
import '../style.css';

export default function About() {
	const [show, setShow] = useState(1);
	const beers = [
		{
			id: 0,
			name: 'AMERICAN PALE ALE',
			desc: [
				'A cerveja Pale Ale tem um teor alcoólico geralmente entre 4% Link 6% ABV e um corpo médio, com uma textura suave. Ao provar uma Pale Ale, você pode esperar um sabor maltado com notas de caramelo e torradas, equilibrado com um amargor moderado do lúpulo, que pode ter sabores florais, frutados ou terrosos.',
				'Essa cerveja é popular entre os amantes de cervejas artesanais que procuram uma experiência de sabor equilibrada, mas ainda assim com um pouco de amargor. É uma cerveja versátil que pode ser apreciada sozinha ou emparelhada com uma variedade de alimentos, desde carnes grelhadas até pratos picantes.',
			],
			image: paleAle,
			bgColor: '#f8a912',
			color: 'black',
		},
		{
			id: 1,
			name: 'DOUBLE IPA',
			desc: [
				'Uma Double IPA (India Pale Ale) é uma cerveja forte e intensamente lupulada, com teor alcoólico geralmente variando entre 7% Link 10% ABV. Essa cerveja é caracterizada por um amargor acentuado, que é equilibrado por um perfil de malte rico e complexo.',
				'Essa cerveja é muito popular entre os amantes de cerveja artesanal que buscam uma experiência de sabor intensa e complexa. Devido à sua alta graduação alcoólica e perfil de sabor distintamente amargo, é uma cerveja mais apropriada para beber devagar, apreciando cada gole e saboreando suas nuances únicas.',
			],
			image: doubleIpa,
			bgColor: '#bd2d16',
			color: 'white',
		},
		{
			id: 2,
			name: 'BROWN ALE',
			desc: [
				'Uma cerveja Brown Ale é um estilo de cerveja que geralmente tem uma coloração marrom clara Link escura, com um corpo médio e um sabor maltado suave. Com teor alcoólico entre 4% e 6%. A cerveja tem um sabor maltado característico, com notas de caramelo, toffee e chocolate, além de um ligeiro amargor proveniente do lúpulo.',
				'Essa cerveja é popular entre os apreciadores de cerveja artesanal que procuram uma experiência de sabor mais suave e menos amarga além de textura cremosa.',
			],
			image: brownIpa,
			bgColor: '#1e0202',
			color: 'white',
		},
	];

	return (
		<section id='info--menu'>
			<div className='btn--menu'>
				{beers.map(beer => {
					return (
						<button
							className='btn--info'
							id='title--info1'
							onClick={e => setShow(beer.id)}
							style={{
								color: beer.color,
								backgroundColor: beer.bgColor,
							}}
						>
							{beer.name}
						</button>
					);
				})}
			</div>

			<div
				id='show--info1'
				className='show--info'
				style={{
					backgroundColor: beers[show].bgColor,
					color: beers[show].color,
				}}
			>
				<p>{beers[show].desc}</p>
				<img
					alt='info 1'
					src={beers[show].image}
					className='img--info'
				/>
			</div>
		</section>
	);
}
