import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './AccountUser.module.css';

const AccountUser = () => {
	return (
		<>
			<Header />
			<div className={styles.mainContainer}>
				{/* <h1>Olá, {req.session.username}</h1> */}

				<Link className={styles.btn_user} id='btn-editUser' to='#'>
					<button>Alterar dados</button>
				</Link>
				<form
					className='editUser'
					id='editUserForm'
					method='POST'
					// action={`/accountUser/${id}?_method=PUT`}
				>
					<label for='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						// value={req.session.email}
						required
					/>

					<label for='password'>New Password:</label>
					<input
						type='password'
						id='password'
						name='password'
						minlength='8'
					/>

					<input type='submit' value='Save Changes' />
				</form>
				<Link className={styles.btn_user} to='/logout'>
					<button>Sair</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default AccountUser;
