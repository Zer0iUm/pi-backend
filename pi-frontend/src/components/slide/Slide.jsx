import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Slide(props) {
	return (
		<section className='carrossel'>
			<div className='swiper'>
				<div className='swiper-wrapper'>
					<div className='swiper-slide'>
						<div>
							<img src={props.banner} alt='banner' />
						</div>
						<div className='conteudo'>
							<p className='conteudo-um'>{props.type}</p>
							<h2>{props.title}</h2>
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
					{/* <div className='swiper-slide'>
						<div>
							<img src={props.banner2} alt='banner' />
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
							<img src={props.banner3} alt='banner' />
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
					</div> */}
				</div>
				<div className='swiper-pagination'></div>

				<div className='swiper-button-prev'></div>
				<div className='swiper-button-next'></div>
			</div>
		</section>
	);
}
