import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AccountAdmin.module.css';

const AccountAdmin = () => {
	return (
		<>
			<Header />
			<div className={styles.mainContainer}>
				{/* <h1>Olá, {req.session.username}</h1> */}

				<Link className={styles.btn_user} to='/productregistration'>
					<button>Adicionar produto</button>
				</Link>
				<Link className={styles.btn_user} to='/productupdate'>
					<button>Editar produto</button>
				</Link>
				<Link className={styles.btn_user} to='/logout'>
					<button>Sair</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default AccountAdmin;
