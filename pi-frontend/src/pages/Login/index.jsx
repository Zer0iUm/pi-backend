import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const Login = () => {
	return (
		<>
			<Header />
			<section class='form'>
				<form class='form__login' method='post' action='/login'>
					<h2 class='form__titulo'>Faça o seu login</h2>
					<h3 class='form__subtitulo'>
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
					<a href='#' class='esqueci__senha'>
						Esqueci a minha senha
					</a>
					<span class='form__erro'></span>
					<button type='submit' class='form__button'>
						ENTRAR
					</button>
					<p>
						Primeira vez por aqui?
						<a href='/signUp' class=''>
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
