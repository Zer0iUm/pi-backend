import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const SignUp = () => {
	return (
		<>
			<Header />

			<section class='section__cadastro'>
				<div class='cadastro'>
					<div class='cadastro__titulo'>
						<img src='/img/login_cadastro.svg' />
						<h3>DADOS PESSOAIS</h3>
					</div>

					<div class='cadastro__estapa'>
						<p class='cadastro__circuloamarelo'>1</p>
						<p class='cadastro__circulocinza'>2</p>
						<p class='cadastro__circulocinza'>3</p>
					</div>
				</div>

				<form class='form' method='post' action='/S'>
					<div class='teste'>
						<input
							type='nome'
							placeholder='Nome'
							id='nome'
							name='name'
						/>
						<input
							type='sobrenome'
							placeholder='Sobrenome'
							id='sobrenome'
							name='lastname'
						/>
					</div>
					<div class='teste'>
						<input
							type='dataNascimento'
							placeholder='Data de Nascimento | 00/00/0000'
							id='dataNascimento'
							name='birthday'
						/>
						<input
							type='genero'
							placeholder='Gênero | ex: Feminino'
							id='genero'
							name='genre'
						/>
					</div>
					<div class='teste'>
						<input
							type='CPF'
							placeholder='CPF | 000.000.000-00'
							id='CPF'
							name='cpf'
						/>
						<input
							type='telefoneContato'
							placeholder='Telefone | (00) 00000-0000'
							id='telefoneContato'
							name='phone'
						/>
					</div>
					<span class='form__erro'>Mensagem de erro</span>

					<section class='section__cadastro'>
						<div class='cadastro'>
							<div class='cadastro__titulo'>
								<img src='/img/cadeado.svg' />
								<h3>DADOS DE LOGIN</h3>
							</div>

							<div class='cadastro__estapa'>
								<p class='cadastro__circulocinza'>1</p>
								<p class='cadastro__circuloamarelo'>2</p>
								<p class='cadastro__circulocinza'>3</p>
							</div>
						</div>

						<div class='teste'>
							<input
								type='email'
								placeholder='E-mail'
								id='email'
								name='email'
							/>
							<input
								type='emailConfirmar'
								placeholder='Confirme seu e-mail'
							/>
						</div>
						<div class='teste'>
							<input
								type='password'
								placeholder='Senha'
								id='senha'
								name='password'
							/>
							<input
								type='password'
								placeholder='Confirme sua senha'
							/>
						</div>
					</section>

					<section
						class='section__cadastro'
						style={{ marginBottom: '4.5rem' }}
					>
						<div class='cadastro'>
							<div class='cadastro__titulo'>
								<img src='/img/casa.svg' />
								<h3>DADOS DE ENDEREÇO</h3>
							</div>

							<div class='cadastro__estapa'>
								<p class='cadastro__circulocinza'>1</p>
								<p class='cadastro__circulocinza'>2</p>
								<p class='cadastro__circuloamarelo'>3</p>
							</div>
						</div>

						<div class='teste'>
							<input
								id='viaCep'
								type='cep'
								placeholder='CEP | 00000-000'
								name='cep'
								maxlength='8'
								minlength='8'
							/>
							<input
								class='teste vazio'
								aria-hidden='true'
								disabled='disabled'
							/>
						</div>
						<div class='teste'>
							<input
								id='cidade'
								type='cidade'
								placeholder='Cidade'
								name='city'
							/>
							<select id='state' name='state'>
								<option class='select' disabled selected hidden>
									Selecione seu estado
								</option>
							</select>
						</div>
						<div class='teste'>
							<input
								id='endereco'
								type='endereco'
								placeholder='Rua'
								name='address'
							/>
							<input
								type='complemento'
								placeholder='Complemento'
								name='complement'
							/>
						</div>
						<div class='teste'>
							<input
								type='numero'
								placeholder='Número'
								name='number'
							/>
							<input
								id='bairro'
								type='bairro'
								placeholder='Bairro'
								name='district'
							/>
						</div>

						<div class='teste'>
							<button type='submit' class='cadastro__botao'>
								CRIAR CONTA
							</button>
						</div>
					</section>
				</form>
			</section>

			<Footer />
		</>
	);
};

export default SignUp;
