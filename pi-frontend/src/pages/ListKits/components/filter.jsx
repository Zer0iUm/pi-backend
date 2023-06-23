import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

const Filtro = props => {
	const [products, setProducts] = useState([]);

	const loadProducts = async () => {
		const response = await api.get(`/kits`);
		setProducts(response.data);
	};

	const [dadosFiltrados, setDadosFiltrados] = useState([]);

	const handleFiltro = e => {
		let filter = products?.filter(item => item.category === e.target.value);
		setDadosFiltrados(filter);
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
								id='2'
								name='filtro'
								value='2'
							/>
							<label for='2'>2 Produtos</label>
						</div>

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='3'
								name='filtro'
								value='3'
							/>
							<label for='3'>3 Produtos</label>
						</div>

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='4'
								name='filtro'
								value='4'
							/>
							<label for='4'>4 Produtos</label>
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
