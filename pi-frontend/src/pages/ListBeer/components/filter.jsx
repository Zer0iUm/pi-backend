import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

const Filtro = props => {
	const [products, setProducts] = useState([]);

	const loadProducts = async () => {
		const response = await api.get(`/cervejas`);
		setProducts(response.data);
	};

	const [dadosFiltrados, setDadosFiltrados] = useState([]);

	const handleFiltro = e => {
		console.log(e.target.value);
		let filter = products?.filter(item => item.category === e.target.value);
		setDadosFiltrados(filter);
		console.log(filter);
	};

	useEffect(() => {
		props.onFilterChange(dadosFiltrados);
	}, [dadosFiltrados]);

	useEffect(() => {
		loadProducts();
	}, []);

	return (
		<>
			<div className='filtro--completo'>
				<h2 className='filtro'>Filtros</h2>
				<hr className='linha--filtro' />
				{/* <h3 className='produto'>Produto</h3> */}
				<form action='/search' method='get' className='filter-form'>
					<section>
						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='null'
								name='filtro'
								value='null'
							/>
							<label for='null'>Nenhum</label>
						</div>

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='pilsen'
								name='filtro'
								value='pilsen'
							/>
							<label for='pilsen'>Pilsen</label>
						</div>

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='ipa'
								name='filtro'
								value='ipa'
							/>
							<label for='ipa'>Ipa</label>
						</div>

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='ale'
								name='filtro'
								value='ale'
							/>
							<label for='ale'>Ale</label>
						</div>
					</section>

					{/* <section>
						<h3 className='preco'>Preço</h3>

						<div className='menor_preco'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='menor_preco'
								name='filtro'
								value='menor preço'
							/>
							<label for='menor_preco'>Menor preço</label>
						</div>

						<div className='maior_preco'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='maior_preco'
								name='filtro'
								value='maior preço'
							/>
							<label for='maior_preco'>Maior preço</label>
						</div>
					</section> */}
				</form>
			</div>

			<div className='container-info-selected'></div>
		</>
	);
};

export default Filtro;
