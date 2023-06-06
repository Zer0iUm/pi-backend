import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';
import AgeVerification from './components/AgeVerification';
import Navbar from './components/Navbar';

const index = () => {
	return (
		<>
			{/* <AgeVerification /> */}
			<Navbar />
			<section className='carrossel'>
				<div className='swiper'>
					<div className='swiper-wrapper'>
						<div className='swiper-slide'>
							<div>
								<img
									src='../../images/banner topo 1.png'
									alt='banner'
								/>
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>CATEGORIA</p>
								<h2>LOREM IPSUM</h2>
								<p className='conteudo-dois'>
									Lorem ipsum dolor sit amet, consectetur
									<br />
									adipiscing elit.sed ipsum tempor, fermentum
									<br />
									lorem pellentesque,luctus tortor.
								</p>
								<Link to='#'>VER CATEGORIA</Link>
							</div>
						</div>
						<div className='swiper-slide'>
							<div>
								<img
									src='../../images/banner topo 1.png'
									alt='banner'
								/>
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>CATEGORIA</p>
								<h2>LOREM IPSUM</h2>
								<p className='conteudo-dois'>
									Lorem ipsum dolor sit amet, consectetur
									<br />
									adipiscing elit.sed ipsum tempor, fermentum
									<br />
									lorem pellentesque,luctus tortor.
								</p>
								<Link to='#'>VER CATEGORIA</Link>
							</div>
						</div>
						<div className='swiper-slide'>
							<div>
								<img
									src='../../images/banner topo 1.png'
									alt='banner'
								/>
							</div>
							<div className='conteudo'>
								<p className='conteudo-um'>CATEGORIA</p>
								<h2>LOREM IPSUM</h2>
								<p className='conteudo-dois'>
									Lorem ipsum dolor sit amet, consectetur
									<br />
									adipiscing elit.sed ipsum tempor, fermentum
									<br />
									lorem pellentesque,luctus tortor.
								</p>
								<Link to='../lists/listAcessories/index.html'>
									VER CATEGORIA
								</Link>
							</div>
						</div>
					</div>
					<div className='swiper-pagination'></div>

					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</section>

			<section id='info--menu'>
				<div className='btn--menu'>
					<button
						className='btn--info'
						id='title--info1'
						onclick="changeInfo('show--info1')"
					>
						AMERICAN PALE ALE
					</button>
					<button
						className='btn--info'
						id='title--info2'
						onclick="changeInfo('show--info2')"
					>
						DOUBLE IPA
					</button>
					<button
						className='btn--info'
						id='title--info3'
						onclick="changeInfo('show--info3')"
					>
						BROWN ALE
					</button>
				</div>
				<div id='show--info1' hidden>
					<p>
						A cerveja Pale Ale tem um teor alcoólico geralmente
						entre 4% Link 6% ABV e um corpo médio, com uma textura
						suave. Ao provar uma Pale Ale, você pode esperar um
						sabor maltado com notas de caramelo e torradas,
						equilibrado com um amargor moderado do lúpulo, que pode
						ter sabores florais, frutados ou terrosos.
						<br />
						<br />
						Essa cerveja é popular entre os amantes de cervejas
						artesanais que procuram uma experiência de sabor
						equilibrada, mas ainda assim com um pouco de amargor. É
						uma cerveja versátil que pode ser apreciada sozinha ou
						emparelhada com uma variedade de alimentos, desde carnes
						grelhadas até pratos picantes.
					</p>
					<img
						alt='info 1'
						src='../../images/american pale ale.png'
						className='img--info'
					/>
				</div>
				<div id='show--info2' className='show--info' hidden>
					<p>
						Uma Double IPA (India Pale Ale) é uma cerveja forte e
						intensamente lupulada, com teor alcoólico geralmente
						variando entre 7% Link 10% ABV. Essa cerveja é
						caracterizada por um amargor acentuado, que é
						equilibrado por um perfil de malte rico e complexo.{' '}
						<br />
						<br />
						Essa cerveja é muito popular entre os amantes de cerveja
						artesanal que buscam uma experiência de sabor intensa e
						complexa. Devido à sua alta graduação alcoólica e perfil
						de sabor distintamente amargo, é uma cerveja mais
						apropriada para beber devagar, apreciando cada gole e
						saboreando suas nuances únicas.
					</p>
					<img
						alt='info 2'
						src='../../images/double.png'
						className='img--info'
					/>
				</div>
				<div id='show--info3' hidden>
					<p>
						Uma cerveja Brown Ale é um estilo de cerveja que
						geralmente tem uma coloração marrom clara Link escura,
						com um corpo médio e um sabor maltado suave. Com teor
						alcoólico entre 4% e 6%. A cerveja tem um sabor maltado
						característico, com notas de caramelo, toffee e
						chocolate, além de um ligeiro amargor proveniente do
						lúpulo.
						<br />
						<br />
						Essa cerveja é popular entre os apreciadores de cerveja
						artesanal que procuram uma experiência de sabor mais
						suave e menos amarga além de textura cremosa.
					</p>
					<img
						alt='info 3'
						src='../../images/brown.png'
						className='img--info'
					/>
				</div>
			</section>

			<main>
				<section id='about'>
					<h2>SOBRE NÓS</h2>
					<hr />
					<div id='container'>
						<div className='coluna'>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Nunc posuere nisl sit amet erat
								sodales, ut dictum purus posuere. Pellentesque
								aliquam faucibus pharetra. Pellentesque eget
								efficitur sem. Suspendisse ut elit id mauris
								blandit ultrices. Cras ultricies nisi ut luctus
								aliquam. Nunc semper, mauris Link lobortis
								rutrum, tortor velit dapibus quam, Link
								scelerisque est tortor ut eros. Duis lectus
								augue, ultrices vel urna pharetra, consectetur
								aliquet tellus.
							</p>
							<p>
								Cras ultricies nisi ut luctus aliquam. Nunc
								semper, mauris Link lobortis rutrum, tortor
								velit dapibus quam, Link scelerisque est tortor
								ut eros. Duis lectus augue, ultrices vel urna
								pharetra, consectetur aliquet tellus.
							</p>
							<img
								alt='brindando'
								src='../../images/image 6.png'
							/>
						</div>
						<div className='coluna'>
							<img
								alt='dois caras contemplando cerveja'
								src='../../images/image 1.png'
							/>
							<p>
								Sed consequat odio at eros viverra, at ultricies
								turpis ullamcorper. Class aptent taciti sociosqu
								ad litora torquent per conubia nostra, per
								inceptos himenaeos.
							</p>
							<button className='btn-geral'>
								ENTRAR EM CONTATO COM A GORÓ
							</button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default index;
