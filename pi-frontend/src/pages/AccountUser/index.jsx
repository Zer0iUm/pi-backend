import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const AccountUser = () => {
	return (
		<>
			<Header />
			<div className='mainContainer'>
				{/* <h1>Olá, {req.session.username}</h1> */}

				<Link className='btn-user' id='btn-editUser' to='#'>
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
				<Link className='btn-user' to='/logout'>
					<button>Sair</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default AccountUser;
