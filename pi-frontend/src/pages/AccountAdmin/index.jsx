import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AccountAdmin.module.css';
import { useNavigate } from 'react-router-dom';

const AccountAdmin = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		// Clear the authentication-related cookies
		document.cookie =
			'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		document.cookie =
			'admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		document.cookie =
			'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

		// Perform any additional cleanup or redirection
		// For example, you can navigate the user to the login page
		navigate('/login');
	};

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
