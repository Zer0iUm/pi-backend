import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

const ProductUpdate = () => {
	const location = useLocation();
	const [formData, setFormData] = useState({});
	const navigate = useNavigate();

  	const loadProduct = async () => {
	  const response = await api.get(`product/${location.state.id}`)
	  setFormData(response.data)
	}
  
	useEffect(() => {
		loadProduct()
	  }, [])

	  const submit = async (e) => {
		e.preventDefault();
		await api.post(`/product/${formData?.id}`, formData)
/* 		console.log("data", formData) */
		.then(navigate("/homestore"));
	  }

	  const handleChange = (event) => {
		setFormData({
		  ...formData,
		  [event.target.name]: event.target.value
		});
	  };


	return (
		<>
			<Header />

			{formData ? (
	<>
		<h1>Editar Produtos</h1>
		<form onSubmit={submit} method='post'>
			<label htmlFor='name'>Nome:</label>
			<input
				type='text'
				id='name'
				name='name'
				value={formData.name}
				placeholder='Informe o nome do produto'
				onChange={handleChange}
			/>
			<br />

			<label htmlFor="product_type_id">Tipo:</label>
                <select
                  id="product_type_id"
                  name="product_type_id"
                  className="form-input"
                  value={formData.product_type_id}
                  onChange={handleChange}
                >
                  <option value={1}>Cervejas</option>
                  <option value={2}>Acessórios</option>
                  <option value={3}>Kits</option>
                </select>

			<label htmlFor='description'>Descrição:</label>
			<textarea
				id='description'
				name='description'
				className='form-input'
				value={formData.description}
				onChange={handleChange}
			></textarea>
			<br />

			<label htmlFor='price'>Preço:</label>
			<input
				type='number'
				id='price'
				name='price'
				className='form-input'
				value={formData.price}
				onChange={handleChange}
			/>
			<br />

			<label htmlFor='image'>Imagem:</label>
			<input
				type='file'
				id='image'
				name='image'
				onChange={handleChange}
			/>
			<br />
				

				<button 
				className='buttonEdit'
				type='submit'
				>
					Salvar
				</button>
		</form>
	</>
) : null}
			<Footer />
		</>
	);
};

export default ProductUpdate;
