import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const ProductUpdate = () => {
	return (
		<>
			<Header />

			<h1>Editar Produtos</h1>

			<form
				action='/product/<%= productToEdit.id%>?_method=PUT'
				method='POST'
				enctype='multipart/form-data'
			>
				<label for='name'>Nome:</label>
				<input
					type='text'
					id='name'
					name='name'
					value='<%= productToEdit.name %>'
				/>
				<br />

				<label for='description'>Descrição:</label>
				<textarea
					id='description'
					name='description'
					value='<%= productToEdit.description%>'
				></textarea>
				<br />

				<label for='price'>Preço:</label>
				<input
					type='number'
					id='price'
					name='price'
					value='<%= productToEdit.price %>'
				/>
				<br />

				<label for='image'>Imagem:</label>
				<input
					type='file'
					id='image'
					name='image'
					value='<%= productToEdit.image %>'
				/>
				<br />

				<button type='submit'>Editar</button>
			</form>

			<Footer />
		</>
	);
};

export default ProductUpdate;
