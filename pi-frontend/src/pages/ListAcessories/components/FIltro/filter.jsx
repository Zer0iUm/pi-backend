import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

const Filtro = props => {
	const [products, setProducts] = useState([]);

	const loadProducts = async () => {
		const response = await api.get(`/listAcessories`);
		setProducts(response.data);
	};

	const [dadosFiltrados, setDadosFiltrados] = useState([]);

	const handleFiltro = e => {
		// if (e.target.checked) {
		let filter = products?.filter(item => item.category === e.target.value);
		setDadosFiltrados(filter);
		console.log(filter);
		// } else {
		// 	// If the checkbox is unchecked, set the filtered data to null or an empty array, depending on your preference
		// 	setDadosFiltrados(products); // or setDadosFiltrados([]);
		// 	console.log(dadosFiltrados);
		// }
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
								id='camiseta'
								name='filtro'
								value='camiseta'
							/>
							<label for='camiseta'>Camiseta</label>
						</div>

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='caixa'
								name='filtro'
								value='caixa'
							/>
							<label for='caixa'>Caixa</label>
						</div>

						{/* <div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='termicos'
								name='filtro'
								value='termicos'
							/>
							<label for='termicos'>Térmicos</label>
						</div> */}

						{/* <div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='abridor'
								name='filtro'
								value='abridor de cerveja'
							/>
							<label for='abridor'>Abridor de Cerveja</label>
						</div> */}

						<div className='filtro'>
							<input
								onChange={handleFiltro}
								type='radio'
								id='bone'
								name='filtro'
								value='bone'
							/>
							<label for='bone'>Boné</label>
						</div>
					</section>

					<section>
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
					</section>
				</form>
			</div>

			<div className='container-info-selected'></div>
		</>
	);
};

export default Filtro;
