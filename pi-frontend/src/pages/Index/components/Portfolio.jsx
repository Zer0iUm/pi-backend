import React from 'react';
import image1 from '../../../images/image 6.png';
import image2 from '../../../images/image 1.png';

import styles from '../marca.module.css';

export default function Portfolio() {
	return (
		<section id={styles.about}>
			<h2>SOBRE NÓS</h2>
			<hr />
			<div id={styles.container}>
				<div className={styles.coluna}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc posuere nisl sit amet erat sodales, ut dictum purus
						posuere. Pellentesque aliquam faucibus pharetra.
						Pellentesque eget efficitur sem. Suspendisse ut elit id
						mauris blandit ultrices. Cras ultricies nisi ut luctus
						aliquam. Nunc semper, mauris Link lobortis rutrum,
						tortor velit dapibus quam, Link scelerisque est tortor
						ut eros. Duis lectus augue, ultrices vel urna pharetra,
						consectetur aliquet tellus.
					</p>
					<p>
						Cras ultricies nisi ut luctus aliquam. Nunc semper,
						mauris Link lobortis rutrum, tortor velit dapibus quam,
						Link scelerisque est tortor ut eros. Duis lectus augue,
						ultrices vel urna pharetra, consectetur aliquet tellus.
					</p>
					<img alt='brindando' src={image1} />
				</div>
				<div className={styles.coluna}>
					<img alt='dois caras contemplando cerveja' src={image2} />
					<p>
						Sed consequat odio at eros viverra, at ultricies turpis
						ullamcorper. Class aptent taciti sociosqu ad litora
						torquent per conubia nostra, per inceptos himenaeos.
					</p>
					<button className='btn_geral'>
						ENTRAR EM CONTATO COM A GORÓ
					</button>
				</div>
			</div>
		</section>
	);
}
