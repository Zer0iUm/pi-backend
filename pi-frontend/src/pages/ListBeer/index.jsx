import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from "../../services/api";
import './style.css';

const Cervejas = () => {
	const location = useLocation();
    
    const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    const response = await api.get("/cervejas");
 	console.log(response.data)
	    setProducts(response.data);
  };
	return (
		<>
			<div className='container'>
				<Header />
				<main className='main--flex'>
					<div className='banner'>
						<img
							src='http://localhost:3000/img/banner menor cerveja 1.png'
							alt='banner'
						/>
					</div>

					<div className='filtro--cerveja--completo'>
						<div className='filtro--completo'>
							<h2 className='filtro'>Filtros</h2>
							<hr className='linha--filtro' />
							<h3 className='estilo'>Estilo</h3>

							<section>
								<div className='american--pale--ale'>
									<input
										type='checkbox'
										id='american--pale--ale'
										name='american--pale--ale'
										checked
									/>
									<label for='american-pale--ale'>
										American Pale Ale
									</label>
								</div>

								<div className='double--ipa'>
									<input
										type='checkbox'
										id='double--ipa'
										name='double--ipa'
									/>
									<label for='double--ipa'>Double IPA</label>
								</div>

								<div className='brown--ale'>
									<input
										type='checkbox'
										id='brown--ale'
										name='brown--ale'
									/>
									<label for='brown--ale'>Brown Ale</label>
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
									<label for='menor--preco'>
										Menor preço
									</label>
								</div>

								<div className='maior--preco'>
									<input
										type='checkbox'
										id='maior--preco'
										name='maior--preco'
									/>
									<label for='maior--preco'>
										Maior preço
									</label>
								</div>
							</section>

							<section>
								<h3 className='alcool'>% de álcool</h3>

								<div className='dois-e-meio'>
									<input
										type='checkbox'
										id='dois-e-meio'
										name='dois-e-meio'
										checked
									/>
									<label for='dois-e-meio'>2,5%</label>
								</div>

								<div className='seis'>
									<input
										type='checkbox'
										id='seis'
										name='seis'
									/>
									<label for='seis'>6%</label>
								</div>

								<div className='dez'>
									<input
										type='checkbox'
										id='dez'
										name='dez'
									/>
									<label for='dez'>10%</label>
								</div>
							</section>

							<section>
								<h3 className='ibu'>IBU</h3>

								<div className='sessenta--e--tres'>
									<input
										type='checkbox'
										id='sessenta--e--tres'
										name='sessenta--e--tres'
									/>
									<label for='sessenta--e--tres'>63</label>
								</div>

								<div className='trinta--e--tres'>
									<input
										type='checkbox'
										id='trinta--e--tres'
										name='trinta--e-tres'
									/>
									<label for='trinta--e--tres'>33</label>
								</div>

								<div className='oitenta'>
									<input
										type='checkbox'
										id='oitenta'
										name='oitenta'
									/>
									<label for='oitenta'>80</label>
								</div>
							</section>

							<section>
								<h3 className='embalagem'>Embalagem</h3>

								<div className='vidro'>
									<input
										type='checkbox'
										id='vidro'
										name='vidro'
										checked
									/>
									<label for='vidro'>Vidro</label>
								</div>

								<div className='aluminio'>
									<input
										type='checkbox'
										id='aluminio'
										name='aluminio'
									/>
									<label for='aluminio'>Aluminio</label>
								</div>
							</section>
						</div>

						<section className='container--cervejas'>
							<h1 className='cervejas'>
								<span>CERVEJAS</span>
							</h1>
							<hr className='linha--cerveja' />

							<div className='container--produtos'>
								<ul className='produtos__container'>
									{products.map((product) => ( 

									<li className='produto__container'>
										<Link
											to='/product'
											className='link__produto'
											state={{id: product.id}}
										>
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
							</div>
							<Link
								to='#'
								className='produtos__botao'
								style={{
									display: 'block',
									width: 'fit-content',
									margin: '0 auto',
									marginTop: '40px',
									marginbottom: '50px',
									padding: '15px 30px',
									textAlign: 'center',
								}}
							>
								VER TODOS OS PRODUTOS
							</Link>
						</section>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Cervejas;
