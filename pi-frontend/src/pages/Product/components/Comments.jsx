import React from 'react';
import styles from '../Product.module.css';

export default function Comments(props) {
	return (
		<section className={styles.comentario}>
			<h3>Nome Sobrenome</h3>
			<div className={styles.rating_user}>
				<img src='http://localhost:3000/img/star.png' />
				<img src='http://localhost:3000/img/star.png' />
				<img src='http://localhost:3000/img/star.png' />
				<img src='http://localhost:3000/img/star.png' />
				<img src='http://localhost:3000/img/star.png' />
			</div>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				laoreet fermentum mollis. In nisi tellus, tristique eget nisl
				at, tristique posuere turpis. Quisque eleifend velit quis
				vestibulum sodales. Donec porta metus non malesuada aliquet.
			</p>
			<div className={styles.rating_comentario}>
				<img
					alt='thumbs up'
					src='http://localhost:3000/img/like-active.png'
				/>
				<div className={styles.likes}>1</div>
				<img
					alt='thumbs down'
					src='http://localhost:3000/img/dislike.png'
				/>
				<div className={styles.dislikes}></div>
			</div>
		</section>
	);
}
