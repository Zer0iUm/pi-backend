import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const AccountAdmin = () => {
	return (
		<>
			<Header />
			<div class='mainContainer'>
				{/* <h1>Olá, {req.session.username}</h1> */}

				<Link class='btn-user' to='/productregistration'>
					<button>Adicionar produto</button>
				</Link>
				<Link class='btn-user' to='/productupdate'>
					<button>Editar produto</button>
				</Link>
				<Link class='btn-user' to='/logout'>
					<button>Sair</button>
				</Link>
			</div>
			<Footer />
		</>
	);
};

export default AccountAdmin;
