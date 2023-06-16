import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const SignUp = () => {
	return (
		<>
			<Header />

			<section className='section__cadastro'>
				<div className='cadastro'>
					<div className='cadastro__titulo'>
						<img src='/img/login_cadastro.svg' alt='Cadastro' />
						<h3>DADOS PESSOAIS</h3>
					</div>

					<div className='cadastro__estapa'>
						<p className='cadastro__circuloamarelo'>1</p>
						<p className='cadastro__circulocinza'>2</p>
						<p className='cadastro__circulocinza'>3</p>
					</div>
				</div>

				<form className='form' method='post' action='/S'>
					<div className='teste'>
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
					<div className='teste'>
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
					<div className='teste'>
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
					<span className='form__erro'>Mensagem de erro</span>

					<section className='section__cadastro'>
						<div className='cadastro'>
							<div className='cadastro__titulo'>
								<img src='/img/cadeado.svg' alt='Cadeado' />
								<h3>DADOS DE LOGIN</h3>
							</div>

							<div className='cadastro__estapa'>
								<p className='cadastro__circulocinza'>1</p>
								<p className='cadastro__circuloamarelo'>2</p>
								<p className='cadastro__circulocinza'>3</p>
							</div>
						</div>

						<div className='teste'>
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
						<div className='teste'>
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
						className='section__cadastro'
						style={{ marginBottom: '4.5rem' }}
					>
						<div className='cadastro'>
							<div className='cadastro__titulo'>
								<img src='/img/casa.svg' alt='Casa' />
								<h3>DADOS DE ENDEREÇO</h3>
							</div>

							<div className='cadastro__estapa'>
								<p className='cadastro__circulocinza'>1</p>
								<p className='cadastro__circulocinza'>2</p>
								<p className='cadastro__circuloamarelo'>3</p>
							</div>
						</div>

						<div className='teste'>
							<input
								id='viaCep'
								type='cep'
								placeholder='CEP | 00000-000'
								name='cep'
								maxlength='8'
								minlength='8'
							/>
							<input
								className='teste vazio'
								aria-hidden='true'
								disabled='disabled'
							/>
						</div>
						<div className='teste'>
							<input
								id='cidade'
								type='cidade'
								placeholder='Cidade'
								name='city'
							/>
							<select id='state' name='state'>
								<option
									className='select'
									disabled
									selected
									hidden
								>
									Selecione seu estado
								</option>
							</select>
						</div>
						<div className='teste'>
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
						<div className='teste'>
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

						<div className='teste'>
							<button type='submit' className='cadastro__botao'>
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
