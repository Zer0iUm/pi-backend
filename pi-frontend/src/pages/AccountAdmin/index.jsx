import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AccountAdmin.module.css';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils';

const AccountAdmin = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		document.cookie =
			'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		document.cookie =
			'admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		document.cookie =
			'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

		navigate('/login');
	};

	return (
		<>
			<Header />
			<div className={styles.mainContainer}>
				<h1>Olá, {getCookie('name')}</h1>

				<Link className={styles.btn_user} to='/productregistration'>
					<button>Adicionar produto</button>
				</Link>
				<Link className={styles.btn_user} to='/productupdate'>
					<button>Editar produto</button>
				</Link>
				<Link
					className={styles.btn_user}
					to='/homestore'
					onClick={handleLogout}
				>
					<button>Sair</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default AccountAdmin;
