import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

import { useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getCookie } from '../../utils';
import api from '../../services/api';

const ProductRegistration = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [productTypeId, setProductTypeId] = useState('1');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [selectedImage, setSelectedImage] = useState();
	const [category, setCategory] = useState('');
	const [type, setType] = useState('');
	// const [abv, setType] = useState('');
	// const [type, setType] = useState('');
	// const [type, setType] = useState('');

	const handleSave = async e => {
		const formData = new FormData();
		formData.append('name', name);
		formData.append('product_type_id', productTypeId);
		formData.append('description', description);
		formData.append('price', price);
		formData.append('category', category);
		formData.append('type', type);
		// formData.append('abv', abv);
		// formData.append('ibu', ibu);
		// formData.append('type_glass', type_glass);

		// name: DataType.STRING(45),
		// 	price: DataType.DECIMAL(10, 2),
		// 	type: DataType.STRING(45),
		// 	image: DataType.STRING(100),
		// 	description: DataType.STRING(1000),
		// 	rating: DataType.TINYINT(1),
		// 	abv: DataType.INTEGER,
		// 	ibu: DataType.INTEGER,
		// 	type_glass: DataType.STRING(45),
		// 	product_type_id: DataType.INTEGER,
		// 	category: DataType.STRING(100),

		if (selectedImage) formData.append('', selectedImage);

		try {
			await api.post('/product', formData, {
				Headers: { authentication: getCookie('authentication') },
			});

			alert('Produto criado com sucesso!');
			navigate('/homestore');
		} catch (error) {
			alert(error.response.data.error);
		}
	};

	return (
		<>
			<Header />

			<h1 className='reg-h1'>Cadastro de Produtos</h1>
			<form
				action='/product'
				method='POST'
				enctype='multipart/form-data'
				className='reg-form'
			>
				<label className='reg-label' for='name'>
					Nome:
				</label>
				<input
					type='text'
					id='name'
					className='reg-name'
					name='name'
					placeholder='Informe o nome do produto.'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<br />

				<label for='product_type_id'>Tipo:</label>
				<select
					id='product_type_id'
					name='product_type_id'
					className='reg-select'
					value={productTypeId}
					onChange={e => {
						setProductTypeId(e.target.value);
						if (e.target.value === '1') setType('Cervejas');
						if (e.target.value === '2') setType('Acessórios');
						if (e.target.value === '3') setType('Kits');
					}}
				>
					<option value='1'>Cerveja</option>
					<option value='2'>Acessórios</option>
					<option value='3'>Kits</option>
				</select>
				<br />

				{productTypeId === '1' ? (
					<>
						<label for='category'>Categoria:</label>
						<select
							id='category'
							name='category'
							className='reg-select'
							value={category}
							onChange={e => setCategory(e.target.value)}
						>
							<option value='pilse'>Pilsen</option>
							<option value='brown'>Brown</option>
							<option value='ale'>Ale</option>
						</select>
						<br />
					</>
				) : productTypeId === '2' ? (
					<>
						<label for='category'>Categoria:</label>
						<select
							id='category'
							name='category'
							className='reg-select'
							value={category}
							onChange={e => setCategory(e.target.value)}
						>
							<option value='camiseta'>Camiseta</option>
							<option value='bone'>Boné</option>
							<option value='caixa'>Caixa</option>
						</select>
						<br />
					</>
				) : productTypeId === '3' ? (
					<>
						<label for='category'>Categoria:</label>
						<select
							id='category'
							name='category'
							className='reg-select'
							value={category}
							onChange={e => setCategory(e.target.value)}
						>
							<option value='2'>2 produtos</option>
							<option value='3'>3 produtos</option>
							<option value='4'>4 produtos</option>
						</select>
						<br />
					</>
				) : null}

				<label for='description'>Descrição:</label>
				<textarea
					id='description'
					className='reg-textarea'
					name='description'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<br />

				<label className='reg-label' for='price'>
					Preço:
				</label>
				<input
					type='number'
					id='price'
					name='price'
					placeholder='Informe o valor do produto.'
					value={price}
					onChange={e => setPrice(e.target.value)}
				/>
				<br />

				<div className='reg-upload-img'>
					<label className='reg-label' for='image'>
						Imagem:
					</label>
					<input
						type='file'
						id='image'
						name='image'
						onChange={e => setSelectedImage(e.target.files[0])}
					/>
				</div>

				<br />

				<Link
					className='cadastrar'
					to='/homestore'
					type='submit'
					onClick={handleSave}
				>
					Cadastrar
				</Link>
			</form>

			<Footer />
		</>
	);
};

export default ProductRegistration;
