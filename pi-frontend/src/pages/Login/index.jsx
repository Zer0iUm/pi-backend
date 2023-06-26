import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import { useState } from 'react';
import api from '../../services/api';

import styles from './Login.module.css';

const Login = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');

	const handleLogin = async () => {
		const auth = {
			email: email,
			password: pwd,
		};

		try {
			const response = await api.post('/login', auth);

			document.cookie = `auth=${response.data.token}; expires=${new Date(
				2100,
				0,
				1
			)}`;

			document.cookie = `admin=${response.data.admin}; expires=${new Date(
				2100,
				0,
				1
			)}`;

			document.cookie = `name=${response.data.name}; expires=${new Date(
				2100,
				0,
				1
			)}`;

			document.cookie = `id=${response.data.id}; expires=${new Date(
				2100,
				0,
				1
			)}`;

			alert('Login realizado!');
			navigate('/homestore');
		} catch (error) {
			alert(error.response.data.error);
		}
	};
	return (
		<>
			<Header />
			<section className={styles.form}>
				<div
					className={styles.form__login}
					method='post'
					action='/login'
				>
					<h2 className={styles.form__titulo}>Faça o seu login</h2>
					<h3 className={styles.form__subtitulo}>
						Conecte-se para finalizar a compra
					</h3>
					<Input
						placeholder='E-mail'
						name='email'
						autocomplete='username'
						id='email'
						onChange={e => setEmail(e.target.value)}
						value={email}
					/>
					<input
						type='password'
						name='password'
						placeholder='Senha'
						autocomplete='current-password'
						id='senha'
						onChange={e => setPwd(e.target.value)}
						value={pwd}
					/>
					{/* <a href='#' className={styles.esqueci__senha}>
						Esqueci a minha senha
					</a> */}
					<span className={styles.form__erro}></span>
					<button
						type='submit'
						className={styles.form__button}
						onClick={handleLogin}
					>
						ENTRAR
					</button>
					<p>
						Primeira vez por aqui?
						<Link to='/signUp' className=''>
							Crie uma conta
						</Link>
					</p>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Login;
