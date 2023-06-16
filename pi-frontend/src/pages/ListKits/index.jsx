import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from "../../services/api";
import './style.css';

const ListKits = () => {
	const location = useLocation();
    
    const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await api.get(`/kits`);
 	console.log(response.data)
	    setProducts(response.data);
  };

	return (
		<>
			<Header />
			<main>
				<div className='banner'>
					<img src='http://localhost:3000/img/banner menor kit 1.png' alt='banner' />
				</div>
				<div className='filtro--cerveja--completo'>
					<div className='filtro--completo'>
						<h2 className='filtro'>Filtros</h2>
						<hr className='linha--filtro' />
						<h3 className='produto'>Qtde de Produtos</h3>
						<section>
							<div className='prod2'>
								<input
									type='checkbox'
									id='prod2'
									name='prod2'
									checked
								/>
								<label for='prod2'>2 Podutos</label>
							</div>

							<div className='prod3'>
								<input
									type='checkbox'
									id='prod3'
									name='prod3'
								/>
								<label for='prod3'>3 Produtos</label>
							</div>

							<div className='prod4'>
								<input
									type='checkbox'
									id='prod4'
									name='prod4'
								/>
								<label for='prod4'>4 Produtos</label>
							</div>
						</section>

						<section>
							<h3 className='preco'>Preço</h3>

							<div className='menor--preco'>
								<input
									type='checkbox'
									id='menor--preco'
									name='menor--preco'
								/>
								<label for='menor--preco'>Menor preço</label>
							</div>

							<div className='maior--preco'>
								<input
									type='checkbox'
									id='maior--preco'
									name='maior--preco'
								/>
								<label for='maior--preco'>Maior preço</label>
							</div>
						</section>
					</div>

					<section className='container--kits'>
						<h1 className='kits'>
							<span>KITS</span>
						</h1>
						<hr className='linha--kits' />

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
											<Link to='#'>
												<img
													className='icone'
													src='http://localhost:3000/img/sacola.png'
													alt='banner'
												/>
											</Link>
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
														R${product.price}
													</p>
												</div> 
								</Link>
							</li>
							))}
						</ul>
						<Link
							to='#'
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
			</main>
			<Footer />
		</>
	);
};

export default ListKits;
