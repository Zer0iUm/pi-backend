import React, { useEffect, useState } from 'react';
import api from '../../../../services/api';

const Filtro = props => {
	const [products, setProducts] = useState([]);

	const loadProducts = async () => {
		const response = await api.get(`/listAcessories`);
		setProducts(response.data);
	};

	const [acessorioSelecionados, setAcessorioSelecionados] = useState({
		camiseta: false,
		copo: false,
		termicos: false,
		abridor: false,
		balde: false,
		menor_preco: false,
		maior_preco: false,
	});

	const [dadosFiltrados, setDadosFiltrados] = useState([]);

	const handleFiltro = e => {
		let filter = products?.filter(item => item.category == e);
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
				<h3 className='produto'>Produto</h3>
				<form action='/search' method='get' className='filter-form'>
					<section>
						<div className='camiseta'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
								id='camiseta'
								name='filtro'
								value='camiseta'
							/>
							<label for='camiseta'>Camiseta</label>
						</div>

						<div className='copo'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
								id='copo'
								name='filtro'
								value='copo'
							/>
							<label for='copo'>Copo</label>
						</div>

						<div className='termicos'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
								id='termicos'
								name='filtro'
								value='termicos'
							/>
							<label for='termicos'>Térmicos</label>
						</div>

						<div className='abridor'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
								id='abridor'
								name='filtro'
								value='abridor de cerveja'
							/>
							<label for='abridor'>Abridor de Cerveja</label>
						</div>

						<div className='balde'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
								id='balde'
								name='filtro'
								value='balde'
							/>
							<label for='balde'>Balde</label>
						</div>
					</section>

					<section>
						<h3 className='preco'>Preço</h3>

						<div className='menor_preco'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
								id='menor_preco'
								name='filtro'
								value='menor preço'
							/>
							<label for='menor_preco'>Menor preço</label>
						</div>

						<div className='maior_preco'>
							<input
								onChange={e => handleFiltro(e.target.value)}
								type='checkbox'
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
