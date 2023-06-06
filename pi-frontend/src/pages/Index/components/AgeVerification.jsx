import React from 'react';
import '../style.css';

export default function AgeVerification() {
	const months = [
		{
			number: '01',
			name: 'Janeiro',
		},
		{
			number: '02',
			name: 'Fevereiro',
		},
		{
			number: '03',
			name: 'Março',
		},
		{
			number: '04',
			name: 'Abril',
		},
		{
			number: '05',
			name: 'Maio',
		},
		{
			number: '06',
			name: 'Junho',
		},
		{
			number: '07',
			name: 'Julho',
		},
		{
			number: '08',
			name: 'Agosto',
		},
		{
			number: '09',
			name: 'Setembro',
		},
		{
			number: '10',
			name: 'Outubro',
		},
		{
			number: '11',
			name: 'Novembro',
		},
		{
			number: '12',
			name: 'Dezembro',
		},
	];

	const days = [];
	for (let i = 1; i <= 31; i++) days.push(i);

	const currentYear = new Date().getFullYear();
	const years = [];
	for (let i = 1930; i <= currentYear; i++) years.push(i);

	return (
		<div id='container-pop-up'>
			<section className='pop-up'>
				<img src='/img/closePopUp.png' onclick='closePopUp()' />
				<h1 className='title-pop-up'>
					VOCÊ TEM IDADE PARA TOMAR GORÓ?
				</h1>
				<h4 className='text'>CONFIRME A SUA IDADE</h4>
				<div className='container-date'>
					<span>
						<select name='day' className='day select'>
							{days.map(day => {
								return <option value={day}>{day}</option>;
							})}
						</select>
					</span>
					<span>
						<select name='month' className='select month'>
							{months.map(month => {
								return (
									<option value={month.number}>
										{month.name}
									</option>
								);
							})}
						</select>
					</span>
					<span>
						<select name='year' id='year' className='select year'>
							{years.map(year => {
								return <option value={year}>{year}</option>;
							})}
						</select>
					</span>
				</div>
			</section>
			<div className='divider'>
				<hr className='amarelo' />
				<hr className='vermelho' />
				<hr className='preto' />
			</div>

			<button id='btn-popup' onclick='checkAge()'>
				VERIFICAR IDADE
			</button>
		</div>
	);
}
