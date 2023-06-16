import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import { useState } from 'react';
import api from '../../services/api';

import './style.css';

const Login = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [pwd, setPwd] = useState('');

	const handleLogin = async () => {
		const auth = {
			email: email,
			pwd: pwd,
		};

		try {
			const response = await api.post('/login', auth);

			document.cookie = `auth=${response.data.token}; expires=${new Date(
				2100,
				0,
				1
			)}`;

			alert('Login realizado!');
			navigate('/');
		} catch (error) {
			alert(error.response.data);
		}
	};
	return (
		<>
			<Header />
			<section className='form'>
				<form className='form__login' method='post' action='/login'>
					<h2 className='form__titulo'>Faça o seu login</h2>
					<h3 className='form__subtitulo'>
						Conecte-se para finalizar a compra
					</h3>
					<input
						placeholder='E-mail'
						name='email'
						autocomplete='username'
						id='email'
					/>
					<Input
						placeholder='E-mail'
						name='email'
						autocomplete='username'
						id='email'
						value={email}
					></Input>

					<input
						type='password'
						name='password'
						placeholder='Senha'
						autocomplete='current-password'
						id='senha'
					/>
					<a href='#' className='esqueci__senha'>
						Esqueci a minha senha
					</a>
					<span className='form__erro'></span>
					<button type='submit' className='form__button'>
						ENTRAR
					</button>
					<p>
						Primeira vez por aqui?
						<a href='/signUp' className=''>
							Crie uma conta
						</a>
					</p>
				</form>
			</section>
			<Footer />
		</>
	);
};

export default Login;
