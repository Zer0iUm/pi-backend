import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from "../../services/api";
import './style.css';

const ListAcessories = () => {
    const location = useLocation();
    
    const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get(`/listAcessories`);
 	console.log(response.data)
	    setProducts(response.data);
  };



	return (
		<>
			<Header />
			<div className='banner'>
				<img src='http://localhost:3000/img/banner menor cerveja 1.png' alt='banner' />
			</div>

			<div className='filtro--cerveja--completo'>
				<div className='filtro--completo'>
					<h2 className='filtro'>Filtros</h2>
					<hr className='linha--filtro' />
					<h3 className='produto'>Produto</h3>
					<form action='/search' method='get' className='filter-form'>
						<section>
							<div className='camiseta'>
								<input
									type='checkbox'
									id='camiseta'
									name='filtro'
									value='camiseta'
									checked
								/>
								<label for='camiseta'>Camiseta</label>
							</div>

							<div className='copo'>
								<input
									type='checkbox'
									id='copo'
									name='filtro'
									value='copo'
								/>
								<label for='copo'>Copo</label>
							</div>

							<div className='termicos'>
								<input
									type='checkbox'
									id='termicos'
									name='filtro'
									value='termicos'
								/>
								<label for='termicos'>Térmicos</label>
							</div>

							<div className='abridor'>
								<input
									type='checkbox'
									id='abridor'
									name='filtro'
									value='abridor de cerveja'
								/>
								<label for='abridor'>Abridor de Cerveja</label>
							</div>

							<div className='balde'>
								<input
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

							<div className='menor--preco'>
								<input
									type='checkbox'
									id='menor--preco'
									name='filtro'
									value='menor preço'
								/>
								<label for='menor--preco'>Menor preço</label>
							</div>

							<div className='maior--preco'>
								<input
									type='checkbox'
									id='maior--preco'
									name='filtro'
									value='maior preço'
								/>
								<label for='maior--preco'>Maior preço</label>
							</div>
						</section>
						<button id='btn-pesquisar' type='submit'>
							Pesquisar
						</button>
					</form>
				</div>
				<section className='container--cervejas'>
					<h1 className='acessorios'>
						<span>ACESSÓRIOS</span>
					</h1>
					<hr className='linha--cerveja' />

					<ul className='produtos__container'>
						{products.map((product) => (

							<li className='produto__container'>
							<Link to='/product' className='link__produto' state={{id: product.id}}>
								<div className='produto__img'>
									<img
										className='foto'
										 src={`http://localhost:3000/img/${product.image}`}
										alt='banner'
									/>
									<div className='icone'>
										<a href='#'>
											<img
												className='icone'
												src='http://localhost:3000/img/sacola.png'
												alt='banner'
											/>
										</a>
									</div>
								</div>
								 <div className='produto__conteudo'>
											<p className='produto__nome'>
												{product.name}
											</p>
											<p className='produto__descricao'>
												{product.type}
											</p>
											<p className='produto__valor'>
												R$ {product.price}
											</p>
										</div> 
							</Link>
						</li>
						))} 
						
					</ul>


					<Link
					href='#'
					className='produtos__botao'
					style={{
						display: 'block',
						width: 'fit-content',
						margin: '0 auto',
						marginBottom: '60px',
						padding: '15px 30px',
						textAlign: 'center',
					}}
				>
					VER TODOS OS PRODUTOS
				</Link>
				</section>
				
			</div>
			<Footer />
		</>
	);
};

export default ListAcessories;
