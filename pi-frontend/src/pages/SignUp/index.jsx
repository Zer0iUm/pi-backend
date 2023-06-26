import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../services/api';
import './style.css';

const SignUp = () => {
	const navigate = useNavigate();

	const [name, setName] = useState();
	const [lastname, setLastname] = useState();
	const [birthday, setBirthday] = useState();
	const [genre, setGenre] = useState();
	const [cpf, setCpf] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [emailConfirm, setEmailConfirm] = useState();
	const [pwdConfirm, setPwdConfirm] = useState();
	const [isAdmin, setIsAdmin] = useState();
	const [cep, setCep] = useState();
	const [adress, setAddress] = useState();
	const [city, setCity] = useState();
	const [distric, setDistric] = useState();
	const [state, setState] = useState();
	const [number, setNumber] = useState();
	const [complement, setComplement] = useState();
	const { register, handleSubmit, setValue, setFocus } = useForm();
	const [day, setDay] = useState();
	const [month, setMonth] = useState();
	const [year, setYear] = useState();

	const handleSave = async () => {
		const user = {
			name: name,
			lastname: lastname,
			birthday: `${year}-${month}-${day}`,
			genre: genre,
			cpf: cpf,
			email: email,
			password: password,
			is_admin: isAdmin,
		};
		console.log(user);
		try {
			await api.post('/signUp', user);

			alert('Usuário criado com sucesso!');
			navigate('/homestore');
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	const checkCEP = e => {
		const cep = e.target.value.replace(/\D/g, '');
		// console.log(cep);
		fetch(`https://viacep.com.br/ws/${cep}/json/`)
			.then(res => res.json())
			.then(data => {
				/*         console.log(data); */
				setValue('address', data.logradouro);
				setValue('city', data.localidade);
				setValue('district', data.bairro);
				setValue('state', data.uf);
				setFocus('number');
			});
	};

	return (
		<>
			<Header />
			<section className='section__cadastro'>
				<div className='cadastro'>
					<div className='cadastro__titulo'>
						<img
							src='http://localhost:3000/img/login_cadastro.svg'
							alt='Cadastro'
						/>
						<h3>DADOS PESSOAIS</h3>
					</div>

					<div className='cadastro__estapa'>
						<p className='cadastro__circuloamarelo'>1</p>
						<p className='cadastro__circulocinza'>2</p>
						<p className='cadastro__circulocinza'>3</p>
					</div>
				</div>

				<div className='form'>
					<div className='teste'>
						<input
							type='nome'
							placeholder='Nome'
							id='nome'
							name='name'
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<input
							type='sobrenome'
							placeholder='Sobrenome'
							id='sobrenome'
							name='lastname'
							value={lastname}
							onChange={e => setLastname(e.target.value)}
						/>
					</div>
					<div className='teste'>
						<input
							type='text'
							placeholder='Dia'
							id='day'
							name='day'
							value={day}
							onChange={e => setDay(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Mês'
							id='month'
							name='month'
							value={month}
							onChange={e => setMonth(e.target.value)}
						/>
						<input
							type='text'
							placeholder='Ano'
							id='year'
							name='year'
							value={year}
							onChange={e => setYear(e.target.value)}
						/>
						<input
							type='genero'
							placeholder='Gênero | ex: Feminino'
							id='genero'
							name='genre'
							value={genre}
							onChange={e => setGenre(e.target.value)}
						/>
					</div>
					<div className='teste'>
						<input
							type='CPF'
							placeholder='CPF | 000.000.000-00'
							id='CPF'
							name='cpf'
							value={cpf}
							onChange={e => setCpf(e.target.value)}
						/>
						<input
							type='telefoneContato'
							placeholder='Telefone | (00) 00000-0000'
							id='telefoneContato'
							name='phone'
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<span className='form__erro'>Mensagem de erro</span>
				</div>

				<div className='cadastro'>
					<div className='cadastro__titulo'>
						<img
							src='http://localhost:3000/img/cadeado.svg'
							alt='Login'
						/>
						<h3>DADOS DE LOGIN</h3>
					</div>

					<div className='cadastro__estapa'>
						<p className='cadastro__circulocinza'>1</p>
						<p className='cadastro__circuloamarelo'>2</p>
						<p className='cadastro__circulocinza'>3</p>
					</div>
				</div>
				<div className='form'>
					<div className='teste'>
						<input
							type='email'
							placeholder='E-mail'
							id='email'
							name='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>

						<input
							type='emailConfirmar'
							placeholder='Confirme seu e-mail'
							value={emailConfirm}
							onChange={e => setEmailConfirm(e.target.value)}
						/>
					</div>
					<div className='teste'>
						<input
							type='password'
							placeholder='Senha'
							id='senha'
							name='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>

						<input
							type='password'
							placeholder='Confirme sua senha'
							value={pwdConfirm}
							onChange={e => setPwdConfirm(e.target.value)}
						/>

						<input
							type='isAdmin'
							placeholder='Você é um administrador?(1 para Sim/0 para não)'
							value={isAdmin}
							onChange={e => setIsAdmin(e.target.value)}
						/>
					</div>
				</div>
				<section
					className='section__cadastro' /* style={{ marginBottom: "4.5rem" }} */
				>
					<div className='cadastro'>
						<div className='cadastro__titulo'>
							<img
								src='http://localhost:3000/img/casa.svg'
								alt='Endereço'
							/>
							<h3>DADOS DE ENDEREÇO</h3>
						</div>

						<div className='cadastro__estapa'>
							<p className='cadastro__circulocinza'>1</p>
							<p className='cadastro__circulocinza'>2</p>
							<p className='cadastro__circuloamarelo'>3</p>
						</div>
					</div>
					<div
						className='form'
						method='post'
						action='/signUp'
						handleSave={handleSubmit(handleSave)}
					>
						<input
							type='cep'
							placeholder='CEP | 00000-000'
							{...register('cep')}
							onBlur={checkCEP}
							value={cep}
							onChange={e => setCep(e.target.value)}
						/>
						<div className='teste'>
							<input
								id='cidade'
								type='cidade'
								placeholder='Cidade'
								{...register('city')}
								name='city'
								value={city}
								onChange={e => setCity(e.target.value)}
							/>

							<input
								id='state'
								type='estado'
								placeholder='Estado'
								{...register('state')}
								name='state'
								value={state}
								onChange={e => setState(e.target.value)}
							/>
						</div>
						<div className='teste'>
							<input
								id='endereco'
								type='endereço'
								placeholder='Endereço'
								{...register('address')}
								value={adress}
								onChange={e => setAddress(e.target.value)}
							/>

							<input
								type='complemento'
								placeholder='Complemento'
								name='complement'
								value={complement}
								onChange={e => setComplement(e.target.value)}
							/>
						</div>

						<div className='teste'>
							<input
								type='numero'
								placeholder='Número'
								{...register('number')}
								value={number}
								onChange={e => setNumber(e.target.value)}
							/>

							<input
								id='bairro'
								type='bairro'
								placeholder='Bairro'
								{...register('district')}
								value={distric}
								onChange={e => setDistric(e.target.value)}
							/>
						</div>
					</div>
				</section>
				<div className='teste'>
					<button
						type='submit'
						className='cadastro__botao'
						onClick={handleSave}
					>
						CRIAR CONTA
					</button>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default SignUp;
